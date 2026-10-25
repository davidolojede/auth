const express = require('express')
const { register, login, dashboard, validateToken } = require('../controllers/auth.controller')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.get('/dashboard', validateToken, dashboard)
module.exports = router