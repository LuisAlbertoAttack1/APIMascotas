const Mascotas = require("../models/Mascotas");
    //CONTENIDO 1
const obtenerMascotas = async (req, res) => {

    try {
        //INICIO
        const mascotas = await Mascotas.find({});
        if (mascotas.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: "NO HAY INFORMACIÓN DE MASCOTAS EN LA BASE DE DATOS"
                //MSG -> Significa Que Va A Colocar Un Mensaje
                //Un Código De Error HTTP 404 Indica Que El Recurso Solicitado No Se Pudo Encontrar En El Servidor. Este Error Es Comúnmente Conocido Como "Not Found" (No Encontrado).
            })
        }
        return res.json({
            ok: true,
            msg: "INFORMACIÓN OBTENIDA CON EXITO",
            //INFORMACIÓN DE MASCOTAS API
            mascotas: mascotas
        })
        //FIN
    } catch (error) {
        //INICIO
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: "ERROR EN EL SERVIDOR"
        //Un Código De Error HTTP 500 Generalmente Indica Un Error Interno Del Servidor. Esto Significa Que Algo Salió Mal En El Servidor, Pero El Servidor No Puede Especificar El Problema Exacto...
        })
        //FIN
    }

}
    //CONTENIDO 1

    //CONTENIDO 2
const obtenerMascotasPorId = async (req, res) => {

    try {
        //INICIO
        const id = req.params.id;
        const mascotas = await Mascotas.findById(id);
        if (!mascotas) {
            return res.status(404).json({
                ok:false,
                msg: "NO EXISTE NINGUNA MASCOTAS CON TAL ID"
            })
        }
        return res.json({
            ok: true,
            msg: "CONTENIDO DE INFORMACIÓN DE MASCOTA CON EXITO",
            mascotas:mascotas
        })
        //FIN
    } catch (error) {
        //INICIO
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: "ERROR EN EL SERVIDOR"
        })
        //FIN
    }

}
    //CONTENIDO 2

    //CONTENIDO 3
const agregarMascotas = async (req, res) => {
    
    try {
        //INICIO
        const mascotas = req.body 
        const nuevoMascotas = new Mascotas(mascotas)
        await nuevoMascotas.save()
        return res.json({
            ok: true,
            msg: "INFORMACIÓN DE MASCOTA AGREGADA CON EXITO",
            mascotas: nuevoMascotas
        })
        //FIN
    } catch (error) {
        //INICIO
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: "ERROR EN EL SERVIDOR"
        })
        //FIN
    }
}
    //CONTENIDO 3

    //CONTENIDO 4
const actualizarMascotas = async (req, res) => {

    try {
        //INICIO
        const id = req.params.id;
        const mascotas = await Mascotas.findById(id)
        if (!mascotas) {
            return res.status(404).json({
                ok: false,
                msg: "NO HAY MASCOTRAS CON ESE ID"
                
            })
        }
        const mascotasActualizado = await Mascotas.findByIdAndUpdate(id, req.body)
        return res.json({
            ok: true,
            msg: "INFORMACIÓN DE MASCOTAS ACTUALIZADA",
            mascotas: mascotasActualizado
        })
        //FIN
    } catch (error) {
        //INICIO
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "ERROR EN EL SERVIDOR"
        })
        //FIN
    }

}
    //CONTENIDO 4

    //CONTENIDO 5
const eliminarMascotas = async (req, res) => {

    try {
        //INICIO
        const id = req.params.id;
        const mascotas = await Mascotas.findById(id)
        if (!mascotas) {
            return res.status(404).json({
                ok: false,
                msg: "NO HAY INFORMACIÓN DE MASCOTA CON ESE ID"
            })
        }
        const mascotasEliminado = await Mascotas.findByIdAndDelete(id)
        return res.json({
            ok: true,
            msg: "MASCOTAS ELIMINADAS",
            mob: mascotasEliminado
        })
        //FIN
    } catch (error) {
        //INICIO
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "ERROR EN EL SERVIDOR"
        })
        //FIN
    }
    
}
    //CONTENIDO 5

    //CONTENIDO DE LOS METODOS
module.exports = {
    obtenerMascotas,
    obtenerMascotasPorId,
    agregarMascotas,
    actualizarMascotas,
    eliminarMascotas
}
    //CONTENIDO DE LOS METODOS