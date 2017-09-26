const mongoose = require('mongoose'),
      Chocolate = require('./../models/chocolateSchema');

module.exports = {
  index   : function(req, res, next){
            Chocolate.find((err, chocolate) => {
                  req.chocolates = chocolate;
                  return next();
            })
  },
  create  : function(req, res, next){
            new Chocolate({
                      label           : req.body.label,
                      manufacturer    : req.body.manufacturer,
                      origin          : req.body.origin,
                      type            : req.body.type,
                      characteristics : {
                          aroma       : req.body.aroma,
                          rawCocoa    : req.body.rawCocoa } })
                  .save((err, chocolate) => {
                      console.log(req.body)
                      console.log('New chocolate added')
                      return next()})
  },
  find    : function(req, res, next){
            Chocolate.findById(req.params.id, function(err, chocolate){
                  console.log(req.params.id)
                  req.chocolate = chocolate;
                  console.log(req.chocolate)
                  return next()
          })
  },

  edit    : function(req, res, next){
            Chocolate.findByIdAndUpdate(req.params.id, {$set: {
              label           : req.body.label,
              manufacturer    : req.body.manufacturer,
              origin          : req.body.origin,
              type            : req.body.type,
              characteristics : {
                  aroma       : req.body.aroma,
                  rawCocoa    : req.body.rawCocoa },
              updatedAt       : date.now()
            }}, function(err, chocolate){
            next()
          })
  },

  delete  : function(req, res, next){
            Chocolate.findById(req.params.id, function(err, chocolate){
            chocolate.remove((err, chocolate) => next())
          })
  },
}
