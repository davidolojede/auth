const express = require("express")
const app = express()
const mongoose = require('mongoose')
require("dotenv").config()
const dns = require('node:dns')
const authRouter = require("./routes/auth.route")
const cors = require('cors')

const PORT_KEY = process.env.PORT
const DB_URL = process.env.MONGO_URL

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
dns.setServers(['1.1.1.1', '8.8.8.8'])
app.use(cors())

app.use('/', authRouter)

mongoose.connect(DB_URL)
    .then((response) => console.log('Mongo connected!'))
    .catch((err) => {
        console.log('Mongo failed')
        console.log(err);
    })


app.listen(PORT_KEY, (err) => {
    if (err) {
        console.log('App has encountered issues');
        console.log(err);
    } else {
        console.log(`App running on ${PORT_KEY}`);
    }
})