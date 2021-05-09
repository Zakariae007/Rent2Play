const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');


// create Geo Location schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates:{
        type: [Number],
        index: "2dsphere"
    }
});


// create court schema and model 
const CourtSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name field is required.']
    },
    courtType: {
        type: String,
        required: [true, 'court type is required'],
        enum: ['Wood', 'Clay', 'Artificial grass', 'Artificial clay', 'Carpet', 'Asphalt', 'Concrete', 'Acrylic', 'Other']
    },
    sport: {
        type: String,
        required: [true, 'sport is required.'],
        enum: ['Tennis', 'Squach', 'Padel']
    },
    email: {
        type: String,
        validate: [isEmail, 'Please enter a valid email']
    },
    address: {
        type: String
    },
    city: {
        type: String
    },
    website: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    type: {
        type: String,
        enum: ['Indoor', 'Outdoor']
    },
    numberOfCourt: {
        type: Number
    },
    price: {
        type: Number
    },
    onlineBooking: {
        type: Boolean
    },
    rentingInventory: {
        type: Boolean
    },
    coaches: {
        type: Number
    },
    startingHour: {
        type: Number,
        enum: ['8 AM', '9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM' 
            , '4 PM','5 PM', '6 PM', '7 PM','8 PM','9 PM', '10 PM']
    },
    endingHour: {
        type: Number,
        enum: ['9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 pM' , '4 PM',
             '5 PM', '6 PM', '7 PM','8 PM','9 PM', '10 PM', '11 PM']
    },

    // Add in Geolocation
    geometry: GeoSchema
}, { timestamps: true });

const Court = mongoose.model('court', CourtSchema);

module.exports = Court;
