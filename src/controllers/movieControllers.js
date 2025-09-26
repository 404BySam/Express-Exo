const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

app.get("/api/movies", (req, res) => {
  res.status(200).json(movies);
});

app.get("/api/movies/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const found = movies.find((element) => element.id === id);

  if (!found) {
    res.status(404).send(`Il existe pas de film avec cet ID: ${id}`);
  } else {
    res.send(found);
  }
});

module.exports = {
  getMovies,
  getMovieById,
};
