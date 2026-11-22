const cloudinary = require("cloudinary").v2; // ✅ v2 import

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secre // option name must be api_secret (env var name unchanged)
});

module.exports = cloudinary;