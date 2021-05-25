const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const AuthRoute = require('./routes/auth')
const CourtRoute = require('./routes/courtApi')
const CoachRoute = require('./routes/coachApi')
const ShopRoute = require('./routes/shopApi')
const BookingRoute = require('./routes/bookingApi')
const cookieParser = require('cookie-parser');
const cors = require('cors')


// set express app
const app = express();

app.use(cors());

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Allow-Credentials', true);
//     if (req.method === 'OPTIONS'){
//         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//         return res.status(200).json({})
//     }
//     next();
//  });

// Connect to MongoDB
mongoose.connect('mongodb://localhost/rent2play', 
{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(db => {
    console.log("Database connected");
  }).catch(error => console.log("Could not connect to mongo db " + error));
mongoose.Promise = global.Promise;

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());

// Initialize routes
app.use('/api', CourtRoute);
app.use ('/api', CoachRoute);
app.use('/api', ShopRoute);
app.use('/payment', BookingRoute)
app.use('/api', AuthRoute);

//Error handling middleware
app.use(function(err, req, res, next){
    res.status(404).send(
        {error: err.message}
    ).end();
})

// Listen for request
app.listen(process.env.port || 4000, function(){
    console.log("Now listening for requests");
});




