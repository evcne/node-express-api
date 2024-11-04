const mongoose = require("mongoose");

const contactShema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add the name"]
    },
    email: {
        type: String,
        required: [true, "Please add the email address"]
    },
    phone: {
        type: String,
        required: [true, "Please add the phone number"]
    }
},
{
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactShema);