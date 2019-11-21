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

var out = `
    table
      tr
      th ID
      th Navn
      th Tændt
      th StrømForbrug
      th AktuelForbrug
      th Styrke
      th Farve
      th TypeNummer
      th SoftwareVersion`;

    con.connect(function(err){
      if(err) throw err;
      con.query("SELECT * FROM smartpærer", function(err, result){
          if(err) throw err;

        

          for(var i = 0; i < result.length; i++){
            out += `
            tr
              td ${result[i].ID}
              td ${result[i].Navn}
              td ${Boolean(result[i].Tændt)}
              td ${result[i].Strømforbug}
              td ${result[i].AktuelForbrug}
              td ${result[i].Styrke}
              td ${result[i].Farve}
              td ${result[i].TypeNummer}
              td ${result[i].SoftwareVersion}`;
          }
          console.log(out);
          res.render('index', {output: out});
      })
  })




});

module.exports = router;
