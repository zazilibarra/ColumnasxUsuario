'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const ColumnasxUsuario = require("./controllers/ColumnasxUsuario");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/api/columnasxusuario/", ColumnasxUsuario._get);

module.exports = app;