var express = require('express');
var router = express.Router();
const path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
  var localpath = path.resolve(__dirname+'/../views/index2.html')
  res.sendFile(localpath);

});

module.exports = router;
