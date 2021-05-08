const Court = require('../modules/court');

// Get the list of Courts

const courtsList = (req, res, next) => {
    Court.find({}).then(function(courts){
        res.send(courts);
    });
}

//Add a new court to the DB
// Here if we get an error, we gonna call the next middleware (which is the error handling middleware) 
const addCourt = (req, res, next) => {
    // This mongoose method will create an instance of Ninja and save it and the DB
    Court.create(req.body).then(function(court){
        res.send(court);
    }).catch(next);
}

// Update a court in the DB
const updateCourt = (req, res, next) => {
    Court.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        Court.findOne({_id: req.params.id}).then(function(court){
            res.send(court);
        });
    });
}

// Delete a court from the DB
const deleteCourt = (req, res, next) => {
    Court.findByIdAndRemove({_id: req.params.id}).then(function(court){
        res.send(court);
    })
}

module.exports = {
    courtsList, 
    addCourt , 
    updateCourt , 
    deleteCourt
};
