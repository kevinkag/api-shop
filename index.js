import mongoose from "mongoose";
import app from './src/app'
import config from './src/config'


mongoose.connect(config.db, (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexion  a la base de datos establecida.')
    app.listen(config.port, () => {
        console.log(`API REST corriendo en http://localhost:${config.port}`)
    })
})



