const express = require('express');
const mysql = require('mysql2');
const bp = require('body-parser');
var cors = require('cors')
const app = express();
app.use(cors())
var port = process.env.PORT || 3030

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'bicicentro'
});

app.get('/trabajadores', function (req, res) {

    let query = "SELECT * FROM trabajadores";

    conn.query(query, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.get('/trabajadores/:id', function (req, res) {

    let dni = req.params.id;

    let query = "SELECT * FROM trabajadores WHERE dni = ?";

    let parans = [dni];

    conn.query(query, parans, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.get('/trabajadores/ventas/:id', function (req, res) {

    let dni = req.params.id;

    let query = "SELECT * FROM ventas WHERE dniTrabajador = ?";

    let parans = [dni];

    conn.query(query, parans, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.get('/sedes', function (req, res) {

    let query = "SELECT * FROM sedes";

    conn.query(query, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.get('/sedes/:id', function (req, res) {

    let idsede = req.params.id;

    let query = "SELECT * FROM sedes WHERE idsede = ?";

    let parans = [idsede];

    conn.query(query, parans, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});

app.get('/sedes/trabajadores/:id', function (req, res) {

    let idsede = req.params.id;

    let query = "SELECT * FROM trabajadores WHERE idsede = ?;";

    let parans = [idsede];

    conn.query(query, parans, function (err, result) {
        if (err) throw err;
        res.json(result);
    });
});
app.listen(port)
console.log('API escuchando en el puerto ' + port)