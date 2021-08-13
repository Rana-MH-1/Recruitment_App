const { body } = require('express-validator')

exports.DataValidationRegister = [
    body('Email', 'Please enter a valid email').isEmail(),
    body('Password', 'Password should be at least 8 caracters').isLength({ min: 8 }),
    body('FullName','FullName is required').isLength({min:2}),
    body('SocietyName','SocietyName is required').isLength({min:4}),
    body('ActivityField','ActivityField is required').isLength({min:4}),
    body('Category','Category is required').isLength({min:4}),
    
    body('LevelStudy','LevelStudy is required').isLength({min:4}),
    body('Specialty','Specialty is required').isLength({min:4}),
]

exports.DataValidationLogin = [
    body('Email', 'Please enter a valid email').isEmail(),
    body('Password', 'Password should be at least 8 caracters').isLength({ min: 8 }),
    
]

exports.DataValidationCandidate = [
    body('Email', 'Please enter a valid email').isEmail(),
    body('Password', 'Password should be at least 8 caracters').isLength({ min: 8 }),
    body('FullName','FullName is required').isLength({min:2})
    
]