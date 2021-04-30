const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create user schema and model 

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "first name is required"]
    },
    lastName: {
        type: String,
        required: [true, "last name is required"]
    },
    phoneNumber: {
        type: String,
        required: [true, "phone number is required"]
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, "password is required"],
        minLenght: 8
    },
    age: {
        type: Number,
        required: [true, "Age is required"]
    },
    category: {
        type: String,
        required: [true, "category is required"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},{ timestamps: true });

const User = mongoose.model('User', UserSchema);

module.exports = User;
