const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    phone: String
});

module.exports = mongoose.model("users", userSchema);