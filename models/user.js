const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = mongoose
    .Schema({
        firstName: String,
        lastName: String,
        email: { type: String, unique: true },
        password: String,
    })
    .pre("save", async function(next) {
        this.password = await bcrypt.hash(this.password, 10);
        next();
    });
const User = mongoose.model("User", userSchema);
module.exports = User;