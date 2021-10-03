const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path')

require('dotenv').config({path:'./config/.env'})
const mongoose = require('mongoose');

app.all('*', function(req, res, next) {
  var origin = req.get('origin'); 
  res.header('Access-Control-Allow-Origin', origin);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

  // intercept OPTIONS method
  if ('OPTIONS' == req.method) {
    res.send(200);
  }
  else {
    next();
  }
};
app.use(allowCrossDomain);
app.use(express.json({ limit: '50mb' }))
const PORT = process.env.PORT || 3001;

// app.use(cors())
app.use("/Uploads",express.static(__dirname+"/Uploads"))

//routes
app.use('/api/Posts', require('./Routes/PostRecuiterRouter'))
app.use('/api/Users', require('./Routes/UserRouter'))
app.use('/api/Apply',require('./Routes/ApplyRouter'))
app.use('/api/meeting', require('./Routes/MeetingRouter'))
//upload file 
app.use('/api/cv', require('./Routes/Upload'))


//setup for deployment
app.use(express.static(path.join(__dirname,'../','client_side','build')))

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','client_side','build','index.html'))
})






//connect to the db
mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true,useFindAndModify: false })
.then(res=> console.log('Db connected'))
.catch(err=> console.log(err))
app.listen(PORT, err=> err? console.log(err) : console.log('server is running on port', PORT))

