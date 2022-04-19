const mysql = require('mysql')

const conn= mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"password"
});
conn.connect(function(err){
    if (err) {
        console.error('error connectiong: ' + err.stack)
        return
    }
    console.log('connected as id ' + conn.threadId)
})
module.exports = conn