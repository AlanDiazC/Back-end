const express = require("express");
const controller = require("../controllers/playlistControllers.js");
router = express.Router();

router.get("/obtenerPlaylists", controller.getPlaylists);

router.post("/obtenerPlaylistsPorContenido", controller.postVerPlaylists);

router.post("/postCrearPlaylist", controller.postNuevaPlaylist);

router.post("/postAgregarCancion", controller.postAgregarCancion);

router.post("/postBorrarCancion", controller.postBorrarCancion);

router.post("/postAgregarLibro", controller.postAgregarLibro);

router.post("/postBorrarLibro", controller.postBorrarLibro);

router.post("/modificarPlaylist", controller.modificarPlaylist);

router.post("/borrarPlaylist", controller.borrarPlaylist);

module.exports = router;
