const { DataTypes, Model } = require("sequelize");
const db = require("../services/database");
const moment = require("moment");
const Counts = require("./counts");

class Invoices extends Model {}

Invoices.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    usercode: {
      type: DataTypes.STRING,
      unique: true,
    },
    countid: {
      type: DataTypes.INTEGER,
      references: {
        model: Counts,
        key: "id",
      },
      allowNull: false,
    },
    additionalservices: {
      type: DataTypes.DOUBLE, // Add unique constraint
    },
    totalamount: {
      type: DataTypes.DOUBLE,
    },
  },
  {
    sequelize: db,
    modelName: "invoice",
    freezeTableName: true,
    tableName: "invoice",
  }
);

Invoices.belongsTo(Counts, {
  foreignKey: "countid",
  targedKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Invoices;
