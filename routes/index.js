const express = require("express")
const router = express.Router()

//Desc Login/Landing Page
//@route GET/

router.get('/', (req,res) => {
    res.send('Login')
})

//Desc Login/Landing Page
//@route GET/

router.get('/dashboard', (req,res) => {
    res.send('Dashboard')
})

module.exports = router