const SupplierTableModel = require("./SupplierTableModel");

class Supplier {
  constructor({ id, company, email, category, createdAt, updatedAt }) {
    this.id = id;
    this.company = company;
    this.email = email;
    this.category = category;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  async create() {
    const results = await SupplierTableModel.create({
      company: this.company,
      email: this.email,
      category: this.category,
    });

    this.id = results.id;
    this.createdAt = results.createdAt;
    this.updatedAt = results.updatedAt;
  }

  async find() {
    const supplier = await SupplierTableModel.findOne({
      where: { id: this.id },
    });

    if (!supplier) {
      throw new Error(
        `There is no Supplier with id: ${this.id}. Try with another value.`
      );
    }

    this.company = supplier.company;
    this.email = supplier.email;
    this.category = supplier.category;
    this.createdAt = supplier.createdAt;
    this.updatedAt = supplier.updatedAt;
  }
}

module.exports = Supplier;
