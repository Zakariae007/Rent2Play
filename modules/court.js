const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    sport: {
        type: String,
        required: [true, 'sport is required.']
    },
    website: {
        type: String
    },
    phoneNumber: {
        type: Number
    },
    type: {
        type: String,
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
        type: Boolean
    },
    startingHour: {
        type: Number
    },
    endingHour: {
        type: Number
    },

    // Add in Geolocation
    geometry: GeoSchema
});

const Court = mongoose.model('court', CourtSchema);

module.exports = Court;
