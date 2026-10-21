const mongoose = require("mongoose")

const regSchema = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const regModel = mongoose.model('auth_users', regSchema)

module.exports = regModel