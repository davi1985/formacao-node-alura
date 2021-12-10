class CreateTables {
  init(connection) {
    this.connection = connection;

    this.createAttendace();
    this.createPets();
  }

  createAttendace() {
    const sql =
      "CREATE TABLE IF NOT EXISTS attendances (id int NOT NULL AUTO_INCREMENT, client varchar(11) NOT NULL, pet varchar(20), service varchar(20) NOT NULL, attendance_date datetime NOT NULL, created_at datetime NOT NULL,status varchar(20) NOT NULL, notes text, PRIMARY KEY (id))";

    this.connection.query(sql, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Table "attendances" created');
      }
    });
  }

  createPets() {
    const query =
      "CREATE TABLE IF NOT EXISTS pets (id int NOT NULL AUTO_INCREMENT, name varchar(50), image varchar(200), PRIMARY KEY (ID))";

    this.connection.query(query, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Table "pets" created');
      }
    });
  }
}

module.exports = new CreateTables();
