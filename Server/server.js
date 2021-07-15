const express = require('express');
const app = express();
require('dotenv').config({path:'./config/.env'})
const mongoose = require('mongoose');
app.use(express.json())
const PORT = process.env.PORT || 5000;


//routes
app.use('/api/Candidate', require('./Routes/CandidateRouter'))
app.use('/api/Recruiter', require('./Routes/RecruiterRouter'))


//connect to the db
mongoose.connect(process.env.URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(res=> console.log('Db connected'))
.catch(err=> console.log(err))
app.listen(PORT, err=> err? console.log(err) : console.log('server is running on port', PORT))