const AttendanceModel = require('../models/attendance');

module.exports = (app) => {
  app.get('/atendimentos', (req, res) => {
    AttendanceModel.getAll(res);
  });

  app.get('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    AttendanceModel.getById(id, res);
  });

  app.post('/atendimentos', (req, res) => {
    const attendance = req.body;

    AttendanceModel.create(attendance, res);
  });

  app.patch('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;

    AttendanceModel.update(id, data, res);
  });

  app.delete('/atendimentos/:id', (req, res) => {
    const id = parseInt(req.params.id);

    AttendanceModel.delete(id, res);
  });
};
