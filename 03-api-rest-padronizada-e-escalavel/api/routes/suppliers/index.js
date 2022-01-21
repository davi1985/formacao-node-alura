const routes = require("express").Router();
const SupplierTableModel = require("./SupplierTableModel");
const Supplier = require("./Supplier");

routes.get("/", async (req, res) => {
  const results = await SupplierTableModel.findAll();

  return res.json(results);
});

routes.get("/:id", async (req, res) => {
  try {
    const id = req.params;
    const supplier = new Supplier(id);
    await supplier.find();

    return res.json(supplier);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

routes.post("/", async (req, res) => {
  const data = req.body;
  const supplier = new Supplier(data);

  await supplier.create();

  return res.status(201).json(supplier);
});

module.exports = routes;
