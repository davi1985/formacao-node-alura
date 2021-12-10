const PetModel = require("../models/pet");

module.exports = (app) => {
  app.post("/pet", (req, res) => {
    const pet = req.body;

    PetModel.create(pet, res);
  });
};
