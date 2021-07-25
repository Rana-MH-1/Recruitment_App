const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path:'./config/.env'})
const mongoose = require('mongoose');


app.use(express.json())
const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({limit: '50mb',extended: true,
parameterLimit:50000}));
//app.use(express.limit(100000000));

//routes
app.use('/api/Posts', require('./Routes/PostRecuiterRouter'))
app.use('/api/Users', require('./Routes/UserRouter'))










//connect to the db
mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true,useFindAndModify: false })
.then(res=> console.log('Db connected'))
.catch(err=> console.log(err))
app.listen(PORT, err=> err? console.log(err) : console.log('server is running on port', PORT))