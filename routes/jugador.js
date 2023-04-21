const {Router} = require("express");
const {jugadorGet, jugadorAddGet, jugadorAddPost, jugadorEditarGet, jugadorActualizar, jugadorEliminarGet, buscarPosicion, buscarNombre, buscarDorsal, buscarGenero, buscarPeso} = require("../controller/jugador");
const {equipoGet, equipoAddGet, equipoAddPost, equipoEditarGet, equipoActualizar, equipoEliminarGet, inicioGet, buscarNombreE, buscarTitulos, buscarLiga, buscarNacionalidad, buscarDivision} = require("../controller/equipo");

const router = Router();

router.get("/" , inicioGet);
router.get("/addJugador", jugadorAddGet);
router.post("/agregarJugador", jugadorAddPost);
router.get("/eliminarJugador/:id", jugadorEliminarGet);
router.get("/actualizarJugador/:id", jugadorEditarGet);
router.post("/updateJugador", jugadorActualizar);
router.get("/jugador" , jugadorGet);
router.post("/filtroPosicion", buscarPosicion);
router.post("/filtroNombre", buscarNombre);
router.post("/filtroDorsal", buscarDorsal);
router.post("/filtroGenero", buscarGenero);
router.post("/filtroPeso", buscarPeso);


router.get("/equipo" , equipoGet);
router.get("/addEquipo", equipoAddGet);
router.post("/agregarEquipo", equipoAddPost);
router.get("/eliminarEquipo/:id", equipoEliminarGet);
router.get("/actualizarEquipo/:id", equipoEditarGet);
router.post("/updateEquipo", equipoActualizar);
router.post("/filtroNombreE", buscarNombreE);
router.post("/filtroTitulos", buscarTitulos);
router.post("/filtroLiga", buscarLiga);
router.post("/filtroNacionalidad", buscarNacionalidad);
router.post("/filtroDivision", buscarDivision);

// router.post("/actualizarUnicornio/{{_id}}");

module.exports = router;
