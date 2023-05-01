const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors")
const koneksi = require('./config/database');
const app = express();
app.use(cors());
// const PORT = process.env.PORT || 5000;
// set body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// create data / insert data
app.put('/sentiment', (req, res) => {
        // buat variabel penampung data dan query sql
        const data = { ...req.body };
        const querySearch = 'SELECT * FROM sentiment WHERE id = ?';
        const queryUpdate = 'UPDATE sentiment SET ? WHERE id = ?';
    
        // set createdAt to current datetime
        data.createdAt = new Date();
        // jalankan query untuk melakukan pencarian data
        koneksi.query(querySearch, 1, (err, rows, field) => {
            // error handling
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
    
            // jika id yang dimasukkan sesuai dengan data yang ada di db
            if (rows.length) {
                // jalankan query update
                koneksi.query(queryUpdate, [data, 1], (err, rows, field) => {
                    // error handling
                    if (err) {
                        return res.status(500).json({ message: 'Ada kesalahan', error: err });
                    }
    
                    // jika update berhasil
                    res.status(200).json({ success: true, message: 'Update success!' });
                });
            } else {
                return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
            }
        });
});


// read data / get data
app.get('/sentiment', (req, res) => {
    const querySql = 'SELECT * FROM sentiment';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        res.status(200).json({ success: true, data: rows });
    });
});

app.put('/sales-report', (req, res) => {
        // buat variabel penampung data dan query sql
        const data = { ...req.body };
        const querySearch = 'SELECT * FROM sales_report WHERE id = ?';
        const queryUpdate = 'UPDATE sales_report SET ? WHERE id = ?';
        // set createdAt to current datetime
        data.createdAt = new Date();
        // jalankan query untuk melakukan pencarian data
        koneksi.query(querySearch, 1, (err, rows, field) => {
            // error handling
            if (err) {
                return res.status(500).json({ message: 'Ada kesalahan', error: err });
            }
    
            // jika id yang dimasukkan sesuai dengan data yang ada di db
            if (rows.length) {
                // jalankan query update
                koneksi.query(queryUpdate, [data, 1], (err, rows, field) => {
                    // error handling
                    if (err) {
                        return res.status(500).json({ message: 'Ada kesalahan', error: err });
                    }
    
                    // jika update berhasil
                    res.status(200).json({ success: true, message: 'Update success!' });
                });
            } else {
                return res.status(404).json({ message: 'Data tidak ditemukan!', success: false });
            }
        });
});


// read data / get data
app.get('/sales-report', (req, res) => {
    const querySql = 'SELECT * FROM sales_report';

    koneksi.query(querySql, (err, rows, field) => {
        if (err) {
            return res.status(500).json({ message: 'Ada kesalahan', error: err });
        }

        res.status(200).json({ success: true, data: rows });
    });
});

app.listen(8000, () => {
	console.log('server started on port 8000');
});