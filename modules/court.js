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
        type: Date
    },
    endingHour: {
        type: Date
    },

    // Add in Geolocation
    geometry: GeoSchema
}, { timestamps: true });

const Court = mongoose.model('court', CourtSchema);

module.exports = Court;
