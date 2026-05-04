const cloudinary = require("cloudinary").v2; // ✅ v2 import

cloudinary.config({
    cloud_name: "dnqvijzxj",
    api_key: "352749827972241",
    api_secret: "oxqjoyHvhdp1n19gUaPBdbVTWD8"
});

module.exports = cloudinary;