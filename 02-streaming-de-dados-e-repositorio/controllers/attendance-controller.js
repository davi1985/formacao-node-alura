const AttendanceModel = require("../models/attendance");

module.exports = (app) => {
  app.get("/atendimentos", (req, res) => {
    AttendanceModel.getAll()
      .then((data) => res.status(200).json(data))
      .catch((err) => res.status(400).json(err));
  });

  app.get("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    // AttendanceModel.getById(id, res);
  });

  app.post("/atendimentos", (req, res) => {
    const attendance = req.body;

    AttendanceModel.create(attendance)
      .then((attendanceCreated) => res.status(201).json(attendanceCreated))
      .catch((err) => res.status(400).json(err));
  });

  app.patch("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const data = req.body;

    // AttendanceModel.update(id, data, res);
  });

  app.delete("/atendimentos/:id", (req, res) => {
    const id = parseInt(req.params.id);

    // AttendanceModel.delete(id, res);
  });
};
