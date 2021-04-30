const User = require('../modules/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


// Register function

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err){
            res.json({
                error: err
            });
        }
        let user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            password: hashedPass,
            age: req.body.age,
            category: req.body.category,
            isAdmin:req.body.isAdmin
        });
        user.save()
        .then(user =>{
            res.json({
                message: "User added successfully"
            });
        }).catch(error => {
            res.json({
                message: "An error occured"
            }); 
        })
    });
}

// Login function : The user could login using the email and phone number

const login = (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    User.findOne({$or: [{email: username}, {phoneNumber: username}]})
    .then(user => {
        if (user) {
            bcrypt.compare(password, user.password, function(err, result){
                if (err) {
                    res.json({
                        error: err
                    })
                }if (result){
                    let token = jwt.sign({name: user.firstName}, 'verySecretValue')  // , {expriresIn: '1h'})
                    res.json({
                        message: 'Login Successfull !',
                        token
                    })
                }else{
                    res.json({
                        message: 'Password did not match ! '
                    })
                }
            })
        }else {
            res.json({
                message: 'No user found'
            })
        }
    })
}

module.exports = {
    register, login
}