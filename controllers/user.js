const User = require("../models/User");
    //CONTENIDO 1
const obtenerUser = async (req, res) => {

    try {
        //INICIO
        const user = await User.find({});
        if (user.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: "NO HAY INFORMACIÓN DE MASCOTAS EN LA BASE DE DATOS"
            })
        }
        return res.json({
            ok: true,
            msg: "INFORMACIÓN OBTENIDA CON EXITO",
            user: user
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
    //CONTENIDO 1

    //CONTENIDO 2
const obtenerUserPorId = async (req, res) => {

    try {
        //INICIO
        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                ok:false,
                msg: "NO EXISTE NINGUNA USER CON TAL ID"
            })
        }
        return res.json({
            ok: true,
            msg: "CONTENIDO DE INFORMACIÓN DE USER CON EXITO",
            user:user
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
    const agregarUser = async (req, res) => {
    
        try {
            //INICIO
            const user = req.body 
            const nuevoUser = new User(user)
            await nuevoUser.save()
            return res.json({
                ok: true,
                msg: "INFORMACIÓN DE USER AGREGADA CON EXITO",
                mascotas: nuevoUser
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
const actualizarUser = async (req, res) => {

    try {
        //INICIO
        const id = req.params.id;
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: "NO HAY USER CON ESE ID"
                
            })
        }
        const userActualizado = await User.findByIdAndUpdate(id, req.body)
        return res.json({
            ok: true,
            msg: "INFORMACIÓN DE MASCOTAS ACTUALIZADA",
            user: userActualizado
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
const eliminarUser = async (req, res) => {

    try {
        //INICIO
        const id = req.params.id;
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({
                ok: false,
                msg: "NO HAY INFORMACIÓN DE USER CON ESE ID"
            })
        }
        const userEliminado = await User.findByIdAndDelete(id)
        return res.json({
            ok: true,
            msg: "USER ELIMINADAS",
            mob: userEliminado
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
    obtenerUser,
    obtenerUserPorId,
    agregarUser,
    actualizarUser,
    eliminarUser
    }

    //CONTENIDO DE LOS METODOS
