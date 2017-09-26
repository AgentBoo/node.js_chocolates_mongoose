// NOTE: Modules
const express = require('express');
      routes = require('./routesController.js');


// NOTE: Express router
const router = express.Router();

router.get('/', (req, res) => res.redirect('/home'));
router.get('/home', routes.index, (req, res) => {
  //  console.log(req.chocolates);
   res.render('home', {
       chocolate: req.chocolates })
});

router.post('/create', routes.create, (req, res) => res.redirect('/'));

router.get('/:id', routes.find, (req, res) => res.render('singleChoco', { chocolate: req.chocolate }) );

router.post('/edit/:id', routes.edit, (req, res) => res.redirect('/'));
router.post('/delete/:id', routes.delete, (req, res) => res.redirect('/'));



module.exports = router;
