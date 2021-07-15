const { body } = require('express-validator')

exports.DataValidation = [
    body('Email', 'Please enter a valid email').isEmail(),
    body('Password', 'Password should be at least 8 caracters').isLength({ min: 8 })
]