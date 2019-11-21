var express = require('express');
var router = express.Router();
var mysql = require('mysql')



/* GET home page. */
router.get('/', function(req, res, next) {
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "ikea-trådfri"
  })

    con.connect(function(err){
      if(err) throw err;
      con.query("SELECT * FROM smartpærer", function(err, result){
          if(err) throw err;
          
          res.render('index', {output: result});
      })
  })




});

module.exports = router;
