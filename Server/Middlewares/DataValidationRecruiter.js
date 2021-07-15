const { body } = require('express-validator')

exports.DataValidationRecruiter = [
    body('Email', 'Please enter a valid email').isEmail(),
    body('Password', 'Password should be at least 8 caracters').isLength({ min: 8 }),
    body('taxRegistrationNumber', 'Tax registration number should have 13 caracters').isLength({min:13,max:13})
]