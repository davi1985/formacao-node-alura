const connection = require("../database/connection");
const uploadFiles = require("../files/uploadFiles");

class Pet {
  create(pet, res) {
    const query = "INSERT INTO pets SET ?";

    uploadFiles(pet.image, pet.name, (err, newPath) => {
      if (err) {
        return res.status(400).json({ err });
      }

      const newPet = { name: pet.name, image: newPath };

      connection.query(query, newPet, (error) => {
        if (error) {
          return res.status(400).json({ error: error.sqlMessage });
        }

        return res.status(201).json(newPet);
      });
    });
  }
}

module.exports = new Pet();
