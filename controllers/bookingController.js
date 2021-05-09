const Booking = require('../modules/booking');

// Create a booking
const createBooking = (req, res, next) => {

    Booking.find({
        
        $and: [
        {court: req.body.court},
        {
            $or :[
            {$and : [
                {bookingStartTime : { $lte: req.body.bookingStartTime }}, // A < Ds < B
                {bookingEndTime : { $gt: req.body.bookingStartTime }}
            ]},
            {$and : [
                {bookingStartTime : { $lt: req.body.bookingEndTime }}, // A < De < B
                {bookingEndTime : { $gte: req.body.bookingEndTime }}
            ]},
            // Ds < A & B < De
            {$and: [
                {bookingStartTime : {$gte: req.body.bookingStartTime}},
                {bookingEndTime : {$lte: req.body.bookingEndTime}},
            ]}
        ]}
    ]}
      
    ).then(function(bookings){
        if(bookings.length > 0){
        res.json({
                message: "You can't book at this time"
            });
            
        }else{  
            Booking.create(req.body).then(function(booking){
                res.json({
                    message: "The booking was created succesfully"
                });
            });
        }     
    }).catch(err => console.log);
}


// Get all bookings
const bookingsList = (req, res, next) => {
    Booking.find({}).then(function(bookings){
        res.send(bookings)
    });
}   

module.exports = {
    createBooking,
    bookingsList
}