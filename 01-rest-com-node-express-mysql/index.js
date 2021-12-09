const customExpress = require('./config/customExpress');
const connection = require('./database/connection');
const CreateTables = require('./database/tables');

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Database connected');

    CreateTables.init(connection);

    const app = customExpress();

    // route
    app.get('/', (_, res) => res.send('Chegou aqui'));

    app.listen(3000, () => console.log('server is running'));
  }
});
