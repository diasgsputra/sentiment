const mysql = require('mysql');
// buat konfigurasi koneksi
const koneksi = mysql.createConnection({
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: "db_sentiment",
    host: "sql12.freemysqlhosting.net",
    user: "sql12613118",
    password: "WADlKk7axY",
    database: "sql12613118",
    // port: 3306,
    multipleStatements: true
});
// koneksi database
koneksi.connect((err) => {
    if (err) throw err;
    console.log('MySQL Connected...');
});
module.exports = koneksi;