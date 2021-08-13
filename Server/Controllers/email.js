
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
// Email info
const mailOptions = {
    from: 'rana.meftah@enis.tn',
    to: 'sirine.mabrouk2016@gmail.com',
    subject: 'How to send emails using NodeJS',
    text: 'Follow the instructions and you will be fine'
};
// Send email 📧  and retrieve server response
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});