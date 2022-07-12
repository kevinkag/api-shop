"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _app = _interopRequireDefault(require("./src/app"));

var _config = _interopRequireDefault(require("./src/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose.default.connect(_config.default.db, (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`);
  }

  console.log('Conexion  a la base de datos establecida.');

  _app.default.listen(_config.default.port, () => {
    console.log(`API REST corriendo en http://localhost:${_config.default.port}`);
  });
});