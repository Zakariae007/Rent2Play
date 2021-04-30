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
    type: {
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
    // Add in Geolocation
    geometry: GeoSchema
});

const Court = mongoose.model('court', CourtSchema);

module.exports = Court;
