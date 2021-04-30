const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create equipment schema and model 
const EquipmentSchema = new Schema({
    name: {
        type: String,
        required: [true, "name is required"]
    },
    description: {
        type: String
    }
});

const Equipment = mongoose.model('equipmemt', EquipmentSchema);
module.exports = Equipment;