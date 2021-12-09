class CreateTables {
  init(connection) {
    this.connection = connection;

    this.createAttendace();
  }

  createAttendace() {
    const sql =
      'CREATE TABLE IF NOT EXISTS attendances (id int NOT NULL AUTO_INCREMENT, client varchar(50) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, attendance_date datetime NOT NULL, created_at datetime NOT NULL,status varchar(20) NOT NULL, notes text, PRIMARY KEY (id))';

    this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Table "attendances" created');
      }
    });
  }
}

module.exports = new CreateTables();
