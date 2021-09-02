const { body } = require('express-validator')

exports.DataValidationLogin = [
    body('Email', 'Please enter a valid email').isEmail(),
    body('Password', 'Password should be at least 8 caracters').isLength({ min: 8 }),
    
]

exports.DataValidationRegister = [
    body('Email', 'Please enter a valid email').isEmail(),
    body('Password', 'Password should be at least 8 caracters').isLength({ min: 8 }),
    body('FullName','FullName is required').isLength({min:2})
    
]

exports.DataPostValidation = [
    body('jobTitle', 'jobTitle is required').isLength({ min: 2 }),
    body('jobDescription','jobDescription is required').isLength({min:2}),
    body('Contrat_Type','Contrat Type is required').isLength({min:2}),
    body('Address','Address is required').isLength({min:2}),
    body('Deadline','Deadline is required').isLength({min:2}),
    body('Nb_Candidate','Nb of Candidate is required').isLength({min:1}),
    body('Nb_Candidate','Please enter a number').isNumeric()
    
]


