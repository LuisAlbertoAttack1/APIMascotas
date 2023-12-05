const { Router } = require("express");
const { obtenerMascotas, obtenerMascotasPorId, agregarMascotas, actualizarMascotas, eliminarMascotas } = require("../controllers/Mascotas");
const router = Router();

router.get("/", obtenerMascotas)
router.get("/busqueda/:id", obtenerMascotasPorId)
router.post("/", agregarMascotas)
router.put("/:id", actualizarMascotas)
router.delete("/:id", eliminarMascotas)


module.exports = router;