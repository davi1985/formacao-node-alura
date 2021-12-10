const { default: axios } = require("axios");
const moment = require("moment");
const connection = require("../database/connection");

class Attendance {
  getAll(res) {
    const query = "SELECT * FROM attendances";

    return this._actionInDB(connection, query, null, res, 200);
  }

  getById(id, res) {
    const query = `SELECT * FROM attendances WHERE id=${id}`;

    connection.query(query, async (error, results) => {
      const attendance = results[0];
      const cpf = attendance.client;

      if (error) {
        return res.status(400).json({ error: error.sqlMessage });
      }

      const { data } = await axios.get(`http://localhost:8082/${cpf}`);

      attendance.client = data;

      return res.status(200).json(attendance);
    });
  }

  create(attendance, res) {
    const { attendance_date, created_at } = this._createDateWithMoment(
      attendance.attendance_date
    );

    const errors = this._validationAttendance(
      attendance_date,
      created_at,
      attendance.client
    );

    const hasErrors = errors.length;

    if (hasErrors) {
      return res.status(400).json(errors);
    }

    const attendanceDated = { ...attendance, created_at, attendance_date };

    const query = "INSERT INTO attendances SET ?";

    this._actionInDB(connection, query, attendanceDated, res, 201);
  }

  update(id, data, res) {
    if (data.attendance_date) {
      data.attendance_date = moment(data.attendance_date, "DD/MM/YYYY").format(
        "YYYY-MM-DD HH:MM:SS"
      );
    }
    const query = "UPDATE attendances SET ? WHERE id=?";

    return this._actionInDB(connection, query, [data, id], res, 200);
  }

  delete(id, res) {
    const query = `DELETE FROM attendances WHERE id=${id}`;

    return this._actionInDB(connection, query, null, res, 200);
  }

  _validationAttendance(attendance_date, created_at, client) {
    const validDate = moment(attendance_date).isSameOrAfter(created_at);
    const validClient = client.length > 4;

    const validations = [
      {
        name: "attendance_date",
        valid: validDate,
        message: "Date must be greater than or equal to current date",
      },
      {
        name: "name",
        valid: validClient,
        message: "The customer name must be more than 4 letters",
      },
    ];

    const errors = validations.filter((field) => !field.valid);

    return errors;
  }

  _actionInDB(connection, query, data, res, status) {
    connection.query(query, data, (error, results) => {
      if (error) {
        return res.status(400).json({ error: error.sqlMessage });
      }

      return res.status(status).json(results);
    });
  }

  _createDateWithMoment(date) {
    const created_at = new Date();
    const attendance_date = moment(date, "DD/MM/YYYY").format(
      "YYYY-MM-DD HH:MM:SS"
    );

    return { created_at, attendance_date };
  }
}

module.exports = new Attendance();
