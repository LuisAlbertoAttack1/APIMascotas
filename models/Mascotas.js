const { model, Schema} = require("mongoose");
const MascotasSchema = new Schema({
    //CONTENIDO DE API
    nombre: {
        type: String,
        require: true,
        unique: true
    },
    raza: {
        type: String,
        require: true
    },
    fechaDeNacimiento: {
        type: Number,
        require: true
    },
    sexo: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    },
    tamano: {
        type: Number,
        require: true
    },
    peso: {
        type: Number,
        require: true
    }

});
module.exports = model("Mascotas", MascotasSchema)