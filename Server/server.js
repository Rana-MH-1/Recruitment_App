const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path:'./config/.env'})
const mongoose = require('mongoose');

const nodemailer = require('nodemailer');

app.use(express.json({ limit: '50mb' }))
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use("/Uploads",express.static(__dirname+"/Uploads"))

//routes
app.use('/api/Posts', require('./Routes/PostRecuiterRouter'))
app.use('/api/Users', require('./Routes/UserRouter'))
app.use('/api/Apply',require('./Routes/ApplyRouter'))
//upload file 
app.use('/api/cv', require('./Routes/Upload'))



//emails



const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
// Email info
const mailOptions = {
    from: 'syrinemabrouk6@gmail.com',
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







//connect to the db
mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true,useFindAndModify: false })
.then(res=> console.log('Db connected'))
.catch(err=> console.log(err))
app.listen(PORT, err=> err? console.log(err) : console.log('server is running on port', PORT))