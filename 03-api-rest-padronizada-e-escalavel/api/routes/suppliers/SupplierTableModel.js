const Sequelize = require("sequelize");
const instance = require("../../database/index");

const collumns = {
  company: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  category: {
    type: Sequelize.ENUM("ração", "brinquedos"),
    allowNull: false,
  },
};

const options = {
  freezeTableName: true,
  tableName: "suppliers",
  timestamps: true,
};

module.exports = instance.define("supplier", collumns, options);
