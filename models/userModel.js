const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        require: [true, "Please add the user name"],
    },
    email: {
        type: String,
        required: [true, "Please ass the email"],
        unique: [true, "Email address already used"],
    },
    password: {
        type: String,
        required: [true, "Please add the user password"],
    },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);