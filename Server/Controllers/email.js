
const nodemailer = require('nodemailer');

const {Email} = req.body.Email
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
// Email info
const mailOptions = {
    from: '"Recruitment Agency"rana.meftah@enis.tn',
    to: `${Email}`,
    subject: 'Apply for your post',
    text: 'A candidate has applied for your post attached with documents',
    attachments :[
        {filename:'CV',
         path:'local/local'
    }
    ]
};
// Send email 📧  and retrieve server response
transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});