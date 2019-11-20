var mysql = require('mysql')
var table = document.getElementById("table");

var con = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin"
})

var output = `<table>
    <tr>
    <th>ID</th>
    <th>Navn</th>
    <th>Tændt</th>
    <th>StrømForbrug</th>
    <th>AktuelForbrug</th>
    <th>Styrke</th>
    <th>Farve</th>
    <th>TypeNummer</th>
    <th>SoftwareVersion</th>
    </tr>`;

con.connect(function(err){
    if(err) throw err;
    con.query("SELECT * FROM ikea-trådfri", function(err, result){
        if(err) throw err;

        console.log(result);
        table.innerHTML= output;
    })
})