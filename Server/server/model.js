const mongoose = require("mongoose")

const registrationSchema = mongoose.Schema(
    {
        username : String,
        email: String,
        password: String,
        college : String,
        branch : String

    }
)

const Register = mongoose.model('register', registrationSchema)

module.exports = Register