const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AuthRoute = require('./routes/auth')

// set express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/rent2play');
mongoose.Promise = global.Promise;

// Parse the JSon
app.use(bodyParser.json());

// Initialize routes
app.use('/api',require('./routes/api.js'));

//Error handling middleware
app.use(function(err, req, res, next){
    res.status(422).send(
        {error: err.message}
    ) 
})

// Listen for request
app.listen(process.env.port || 4000, function(){
    console.log("Now listening for requests");
});

// Initialize user authentication route
app.use('/api', AuthRoute);