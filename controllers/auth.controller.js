const regModel = require("../models/user.model")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const register = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        const user = new regModel({
            ...req.body,
            password: hashedPassword
        })
        user.save()
        return res.status(200).send(user)
    } catch (err) {
        console.log('Couldnt register')
        console.log(err);
    }
}

const login = async (req, res) => {
    try {
        const user = await regModel.findOne({ email: req.body.email })
        if (user) {
            const passwordCheck = await bcrypt.compare(req.body.password, user.password)
            if (passwordCheck) {
                res.status(200).send('Logged In')
            } else {
                res.status(400).send({ res: 'Incorrect password' })
            }
        } else {
            res.status(404).send('Incorrect email')
        }
    } catch (err) {
        console.log(err);
        res.send(err)
        res.status(400).send('Incorrect info')
    }
}

module.exports = { register, login }