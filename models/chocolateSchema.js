// load what is needed
var mongoose = require('mongoose');

// define the schema for Chocolate Model
var chocolateSchema = mongoose.Schema({

    label             : { type: String, required: true },
    manufacturer      : { type: String, required: true },
    origin            : { type: String, required: true },
    type              : { type: String, required: true },
    characteristics   : {
        aroma         : { type: [ String ], default: ['Up for degustation']},
        rawCocoa      : { type: String, required: true },
    },
    createdAt         : { type: Date, default: Date.now },
    updatedAt         : { type: Date, default: Date.now }

});


// create the model for users and expose it to app
module.exports = mongoose.model('Chocolate', chocolateSchema);
