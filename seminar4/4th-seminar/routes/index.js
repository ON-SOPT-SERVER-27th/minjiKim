var express = require('express');
var router = express.Router();

router.use('/users', require('./users'));

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
