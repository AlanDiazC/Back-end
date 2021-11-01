const mongoose = require("mongoose");

mongoose
  .connect("mongodb://user8:root@54.173.202.133:27017/base8?authSource=admin")
  .then(() => console.log("Conexion exitosa"))
  .catch((err) => console.log(err));

const Playlists = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  contenido: {
    type: String,
    required: true,
  },
  listaCanciones: [
    {
      nombreCancion: {
        type: String,
      },
      autorCancion: {
        type: String,
      },
      generoCancion: {
        type: String,
      },
      album: {
        type: String,
      },
    },
  ],
  listaLibros: [
    {
      nombreLibro: {
        type: String,
      },
      autorLibro: {
        type: String,
      },
      generoLibro: {
        type: String,
      },
      editorial: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Playlists", Playlists);
