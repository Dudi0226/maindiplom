const { DataTypes, Model } = require("sequelize");
const db = require("../services/database");
const moment = require("moment");
const Invoices = require("./invoice");

class Payment extends Model {}

Payment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    paymetdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    payamount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    paidamount: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    invoiceid: {
      type: DataTypes.INTEGER,
      references: {
        model: Invoices,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "countimage",
    freezeTableName: true,
    tableName: "countimage",
  }
);

Payment.belongsTo(Invoices, {
  foreignKey: "invoiceid",
  targedKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Payment;
