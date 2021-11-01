const mongoose = require("mongoose");

const Playlists = require("../models/playlistModel.js");

exports.getPlaylists = async (req, res) => {
  const playlist = await Playlists.find().catch((err) => res.json(err));
  res.status(200).json(playlist);
};

exports.postVerPlaylists = async (req, res) => {
  const playlist = await Playlists.find({
    contenido: req.body.contenido,
  }).catch((err) => res.json(err));
  res.status(200).json(playlist);
};

exports.postNuevaPlaylist = async (req, res) => {
  const playlist = await new Playlists({
    nombre: req.body.nombre,
    contenido: req.body.contenido,
  });
  playlist
    .save()
    .then((playlistRes) => {
      res.status(200).json(playlistRes);
    })
    .catch((err) => res.json(err));
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
    )
      .then(res.status(200).json({ estado: "cancion agregada" }))
      .catch((err) => res.json(err));
  } else {
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
    )
      .then(res.status(200).json({ estado: "libro agregado" }))
      .catch((err) => res.json(err));
  } else {
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
            album: req.body.album,
          },
        },
      }
    )
      .then(res.status(200).json({ estado: "cancion eliminada" }))
      .catch((err) => res.json(err));
  } else {
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
    )
      .then(res.status(200).json({ estado: "libro eliminado" }))
      .catch((err) => res.json(err));
  } else {
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
  )
    .then(res.status(200).json({ estado: "aceptado" }))
    .catch((err) => res.json(err));
};

exports.borrarPlaylist = async (req, res) => {
  Playlists.deleteOne({
    nombre: req.body.nombre,
  })
    .then(() => {
      res.status(200).json({ estado: "aceptado" });
    })
    .catch((err) => res.json(err));
};
