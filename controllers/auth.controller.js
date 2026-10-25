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
        return res.status(200).json({ user: user, message: "Proceed to login" })
    } catch (err) {
        console.log("Couldn't register")
        console.log(err);
    }
}

const login = async (req, res) => {
    try {
        const user = await regModel.findOne({ email: req.body.email })
        if (user) {
            const passwordCheck = await bcrypt.compare(req.body.password, user.password)
            if (passwordCheck) {
                const payload = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email
                }

                const token = await jwt.sign({ payload }, process.env.JWT_SECRET, { expiresIn: '60s' })
                res.status(200).json({ message: 'logged in', token: token })
            } else {
                res.status(400).json({ error: 'Incorrect password' })
            }
        } else {
            res.status(400).json({ error: 'Incorrect email' })
        }
    } catch (err) {
        'Incorrect email'
        console.log(err);
        res.send(err)
        res.status(400).send('Incorrect info')
    }
}

const dashboard = (req, res) => { }

const validateToken = async (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const verifiedToken = await jwt.verify(token, process.env.JWT_SECRET)
        res.status(200).send(verifiedToken)
    } catch (err) {
        return res.status(401).json({ error: err })
    }
}
module.exports = { register, login, dashboard, validateToken }