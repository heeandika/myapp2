var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {locals: { title: 'Google' }});
});

router.get('/home', function(req, res, next) {
  var hasil = req.query.search

});

module.exports = router;


