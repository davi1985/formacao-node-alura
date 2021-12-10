const connection = require("../database/connection");

class Pet {
  create(pet, res) {
    const query = "INSERT INTO pets SET ?";

    connection.query(query, pet, (error) => {
      if (error) {
        return res.status(400).json({ error: error.sqlMessage });
      }

      return res.status(201).json(pet);
    });
  }
}

module.exports = new Pet();
