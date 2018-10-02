'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const columnasxusuario = Schema({
	idUsuario : Number,
    idTabla : String,
    columnas: [
    {
        nombre: String,
        indice: Number
    }],
},
{ collection: 'ColumnasxUsuario' });

module.exports = mongoose.model('ColumnasxUsuario', columnasxusuario);