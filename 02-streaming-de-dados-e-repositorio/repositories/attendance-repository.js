const query = require("../database/queries");

class AttendanceRepository {
  create(attendance) {
    const sql = "INSERT INTO attendances SET ?";

    return query(sql, attendance);
  }

  getAll() {
    const sql = "SELECT * FROM attendances";

    return query(sql);
  }

  getById(id) {
    const sql = `SELECT * FROM attenances WHERE id=${id}`;

    return query(sql, id);
  }
}

module.exports = new AttendanceRepository();
