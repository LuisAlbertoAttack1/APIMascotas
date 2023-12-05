const mongoose = require("mongoose")
const dbConexion = async() => {

    try {
    //INICIO
    await mongoose.connect(process.env.MONGOURI)
    console.log("SE CONECTO A LA BASE DE DATOS");
    //FIN   
    } catch (error) {
    //INICIO
    console.log(error);
      throw new Error("NO SE PUDO CONECTAR A LA BASE DE DATOS :(")
    //FIN
    }

}
module.exports =dbConexion;