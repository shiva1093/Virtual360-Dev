var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/country/', function (req, res) {
    res.redirect('../country/italy/rome.html');
});
module.exports = router;
