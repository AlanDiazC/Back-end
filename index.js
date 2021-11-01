const express = require("express");
const routes = require("./routes/playlistRoutes.js");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

//Vinculamos la aplicación con los recursos de videojuegos
app.use("/", routes);

app.listen(8080, () => {
  console.log("Servidor online en el puerto 8080");
});