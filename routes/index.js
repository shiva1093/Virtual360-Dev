var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


/*
router.get('/country/italy', function (req, res) {
  console.log('one');
    res.render('rome');
});
*/

module.exports = router;
