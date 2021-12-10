const connection = require("./connection");

const executeQuery = (query, params = "") => {
  return new Promise((resolve, rejecjt) => {
    connection.query(query, params, (err, results, fields) => {
      if (err) {
        return rejecjt(err);
      }

      return resolve(results);
    });
  });
};

module.exports = executeQuery;
