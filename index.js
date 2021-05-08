const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AuthRoute = require('./routes/auth')
const CourtRoute = require('./routes/courtApi')
const CoachRoute = require('./routes/coachApi')
const ShopRoute = require('./routes/shopApi')
const cookieParser = require('cookie-parser')


// set express app
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/rent2play');
mongoose.Promise = global.Promise;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Initialize routes
app.use('/api', CourtRoute);
app.use ('/api', CoachRoute);
app.use('/api', ShopRoute);

//Error handling middleware
app.use(function(err, req, res, next){
    res.status(404).send(
        {error: err.message}
    ) 
})

// Listen for request
app.listen(process.env.port || 4000, function(){
    console.log("Now listening for requests");
});

// Initialize user authentication route
app.use('/api', AuthRoute);

