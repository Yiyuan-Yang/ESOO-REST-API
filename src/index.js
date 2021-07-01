import express from "express";
import data from "../data";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const { PORT = 4000} = process.env;

app.use(bodyParser.json()).use(cors());

// GET requests below
app.get("/", (request, response) => response.send("Hello World!"));


// Endpoint for list of all birds
app.get("/api/v1/birds", (req, res) => res.json(data.birds));
// Endpoint to get specific bird
app.get("/api/v1/birds/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const bird = data.birds.find((bird) => bird.id === id);
  return res.json(bird);
});

// Endpoint for list of all reptiles
app.get("/api/v1/reptiles", (req, res) => res.json(data.reptiles));
// Endpoint to get specific reptile
app.get("/api/v1/reptiles/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const reptile = data.reptiles.find((reptile) => reptile.id === id);
  return res.json(reptile);
});

// Endpoint for list of all insects
app.get("/api/v1/insects", (req, res) => res.json(data.insects));
// Endpoint to get specific insect
app.get("/api/v1/insects/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const insect = data.insects.find((insect) => insect.id === id);
  return res.json(insect);
});

// Endpoint for list of all fishes
app.get("/api/v1/fishes", (req, res) => res.json(data.fishes));
// Endpoint to get specific fish
app.get("/api/v1/fishes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const fish = data.fishes.find((fish) => fish.id === id);
  return res.json(fish);
});

// Endpoint for list of all amphibians
app.get("/api/v1/amphibians", (req, res) => res.json(data.amphibians));
// Endpoint to get specific amphibian
app.get("/api/v1/amphibians/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const amphibian = data.amphibians.find((amphibian) => amphibian.id === id);
  return res.json(amphibian);
});

// Endpoint for list of all mammals
app.get("/api/v1/mammals", (req, res) => res.json(data.mammals));
// Endpoint to get specific mammal
app.get("/api/v1/mammals/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const mammal = data.mammals.find((mammal) => mammal.id === id);
  return res.json(mammal);
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
