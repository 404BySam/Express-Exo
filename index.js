const express = require("express");
const app = express();

const port = 5000;

app.get("/", (req, res) => {
  res.send("Salut Bienvenue sur ma liste favorite!");
});

app
  .listen(port, () => {
    console.info(`Serveur écoute sur le port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
