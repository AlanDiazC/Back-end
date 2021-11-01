const mongoose = require("mongoose");

const Playlists = require("../models/playlistModel.js");

exports.getPlaylists = async (req, res) => {
  const playlist = await Playlists.find();
  console.log(playlist);
  res.json(playlist);
};

exports.postVerPlaylists = async (req, res) => {
  const playlist = await Playlists.find({ contenido: req.body.contenido });
  console.log(playlist);
  res.json(playlist);
};

exports.postNuevaPlaylist = async (req, res) => {
  const playlist = await new Playlists({
    nombre: req.body.nombre,
    contenido: req.body.contenido,
  });
  playlist.save().then((playlistRes) => {
    console.log("Playlist agregada");
    res.json(playlistRes);
  });
};

exports.postAgregarCancion = async (req, res) => {
  if (req.body.contenido == "Canciones") {
    Playlists.updateOne(
      {
        nombre: req.body.nombre,
      },
      {
        $push: {
          listaCanciones: {
            nombreCancion: req.body.nombreCancion,
            autorCancion: req.body.autorCancion,
            generoCancion: req.body.generoCancion,
            album: req.body.album,
          },
        },
      }
    ).then(res.json({ estado: "cancion agregada" }));
  } else {
    console.log("no se pueden agregar canciones a una playlist de libros");
    res.json({ estado: "error al agregar cancion" });
  }
};

exports.postAgregarLibro = async (req, res) => {
  if (req.body.contenido == "Libros") {
    Playlists.updateOne(
      {
        nombre: req.body.nombre,
      },
      {
        $push: {
          listaLibros: {
            nombreLibro: req.body.nombreLibro,
            autorLibro: req.body.autorLibro,
            generoLibro: req.body.generoLibro,
            editorial: req.body.editorial,
          },
        },
      }
    ).then(res.json({ estado: "libro agregado" }));
  } else {
    console.log("no se pueden agregar libros a una playlist de canciones");
    res.json({ estado: "error al agregar libro" });
  }
};

exports.postBorrarCancion = async (req, res) => {
  if (req.body.contenido == "Canciones") {
    Playlists.updateOne(
      {
        nombre: req.body.nombre,
      },
      {
        $pull: {
          listaCanciones: {
            nombreCancion: req.body.nombreCancion,
            autorCancion: req.body.autorCancion,
            generoCancion: req.body.generoCancion,
          },
        },
      }
    ).then(res.json({ estado: "cancion eliminada" }));
  } else {
    console.log("no se pueden eliminar canciones de una playlist de libros");
    res.json({ estado: "error al eliminar cancion" });
  }
};

exports.postBorrarLibro = async (req, res) => {
  if (req.body.contenido == "Libros") {
    Playlists.updateOne(
      {
        nombre: req.body.nombre,
      },
      {
        $pull: {
          listaLibros: {
            nombreLibro: req.body.nombreLibro,
            autorLibro: req.body.autorLibro,
            generoLibro: req.body.generoLibro,
            editorial: req.body.editorial,
          },
        },
      }
    ).then(res.json({ estado: "libro eliminado" }));
  } else {
    console.log("no se pueden eliminar libros de una playlist de canciones");
    res.json({ estado: "error al eliminar libro" });
  }
};

exports.modificarPlaylist = async (req, res) => {
  Playlists.updateOne(
    { nombre: req.body.nombre },
    {
      $set: {
        nombre: req.body.nuevoNombre,
      },
    }
  ).then(res.json({ estado: "aceptado" }));
};

exports.borrarPlaylist = async (req, res) => {
  Playlists.deleteOne({
    nombre: req.body.nombre,
  }).then(() => {
    console.log("Playlist eliminada");
    res.json({ estado: "aceptado" });
  });
};
