'use strict'

const columnasxusuario = require('../models/ColumnasxUsuario');

function _get(req, res) {
    let idUsuario = parseInt(req.query.idUsuario);

    sucursales.find({idUsuario: idUsuario})
        .then((conf) => {
            console.log(conf);
            res.status(200).send(conf);
        })
        .catch((error) => {
            return res.status(500).send({
                message: "Error al realizar la peticion"
            });
        });
}

module.exports = {
    _get
}