const SupplierTableModel = require("../routes/suppliers/SupplierTableModel");

SupplierTableModel.sync()
  .then(() => console.log("Table Supplier created"))
  .catch((err) => console.log(err));
