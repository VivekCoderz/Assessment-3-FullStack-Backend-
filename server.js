const express = require("express");
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer");
const { uploadImage } = require("./config/multer");
const app = express();


app.use(express.json());



const transformer = nodemailer.createTransport({
    service : "gmail",
    auth : {
        user : "vivekgarg0605@gmail.com",
        pass : "plrtvijptmdrlbzm"
    }
})

app.post("/api/auth/register",async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        const userExist = await User.findOne({email})
        if(userExist) return res.status(400).json({mss : "Email already exist"});
        const hashPassword = await bcrypt.hash(password,10);

        const newUser = new User({
            name,email,password : hashPassword
        })
        const saveUser = await newUser.save()
        await transformer.sendMail({
            from : "vivekgarg0605@gmail.com",
            to : email,
            subject : "Welcome to Our Platform 🎉",
            text : `Hello ${name},

Thank you for registering with us!

We’re excited to have you on board. Your account has been successfully created using this email: ${email}.

If you did not create this account, please contact our support team immediately.

Best regards,  
Team Support`
        })
        return res.status(201).json({mss : "user Signup successfully",user : saveUser})
    }catch(err){
        return res.status(500).json({mss : "Error Occur from server",err})
    }
})


app.post("/api/auth/login",async (req,res)=>{
    try{
        const {email,password} = req.body;
        const userExist = await User.findOne({email})
        if(!userExist) return res.status(400).json({mss : "Email not exist"});

        const correctPassword = await bcrypt.compare(password,userExist.password)
        if(!correctPassword) return res.status(400).json({mss : "password is incorrect"})

        const token = await jwt.sign(
            {id: userExist._id},
            "assessment-3",
            {expiresIn : "1d"}
        )

        return res.status(200).json({mss : "user Login successfully",user : userExist,token})
    }catch(err){
        return res.status(500).json({mss : "Error Occur from server",err})
    }
})




const authMiddleware = async (req,res,next) => {
    try{
        const token = req.headers.authorization?.split(" ")[1];
        if(!token) return res.status(401).json({mss : "No token provided"})
        
        const decode = await jwt.verify(token,"assessment-3")

        req.user = decode;
        next()
        
    }catch(err){
        return res.status(401).json({mss : "Invalid token",err})
    }
}


app.get("/api/auth/me",authMiddleware,async (req,res)=>{
    try{
        const user = await User.findById({_id : req.user.id},{password : 0})

         if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        return res.status(200).json({mss : "user detail fetched successfully",user})
    }catch(err){
        return res.status(500).json({mss : "Error Occur from server",err})
    }
})


app.get("/api/users",async (req,res) => {
    try{ 
        const users = await User.find({},{password : 0})
        return res.status(201).json({mss : "All user fetch successfully",users})
    }catch(err){
        return res.status(500).json({mss : "server error",err})
    }
})


app.get("/api/users/:id",async (req,res) => {
    try{ 
        const id = req.params.id;
        const user = await User.findById({_id : id},{password : 0});

        if(!user) return res.status(401).json({mss : "User not found"})
        return res.status(201).json({mss : "user fetch successfully",user})
    }catch(err){
        return res.status(500).json({mss : "server error",err})
    }
})

app.put("/api/users/:id",authMiddleware,async (req,res) => {
    try{ 
        const id = req.params.id;
        const {name,email,password} = req.body;
         
         if (req.user.id !== req.params.id) {
            return res.status(403).json({ msg: "Unauthorized access" });
        }

        const updateData = {};

        if (name) updateData.name = name;
        if (email) updateData.email = email;

        if (password) {
            const hashPassword = await bcrypt.hash(password, 10);
            updateData.password = hashPassword;
        }

        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            updateData
        );

        if (!updatedUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        return res.status(200).json({
            msg: "User updated successfully",
            user: updatedUser
        });
    }catch(err){
        return res.status(500).json({mss : "server error",err})
    }
})


app.delete("/api/users/:id", authMiddleware, async (req, res) => {
    try {

        if (req.user.id !== req.params.id) {
            return res.status(403).json({ msg: "Unauthorized access" });
        }

        const deletedUser = await User.findByIdAndDelete(req.params.id);

        if (!deletedUser) {
            return res.status(404).json({ msg: "User not found" });
        }

        return res.status(200).json({
            msg: "User deleted successfully"
        });

    } catch (err) {
        return res.status(500).json({ msg: "Server error", err: err.message });
    }
});


app.post("/api/users/upload-profile",authMiddleware, uploadImage.single("image"), async (req, res) => {

  try {
    const id = req.body.id
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }
    
    const user = await User.findByIdAndUpdate(
      id,
      { profileImg: req.file.path },
      { new: true }
    );
    res.status(200).json({
      message: "Profile Photo uploaded",
      user
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
});


const PORT = 3000;
mongoose.connect("mongodb+srv://vivekgarg0605:06062005@cluster0.gvtemeh.mongodb.net/assessment-3").then(()=>{
    app.listen(PORT,()=>{
        console.log("Server on running on Port ",PORT)
    })
})