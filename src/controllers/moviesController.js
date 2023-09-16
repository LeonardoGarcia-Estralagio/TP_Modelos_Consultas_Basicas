const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    db.Movie.findAll().then((movies) => {
      return res.render("moviesList", {
        movies,
      });
    })
    .catch((error => {
        console.log('Error en la conexión', error);
    }));
  },
  new: (req, res) => {
    res.send("Ultimas peliculas");
  },
  recomended: (req, res) => {
    res.send("Peliculas recomendadas");
  },
  detail: (req, res) => {
    res.send("Detalles de la peliculas");
  },
};
