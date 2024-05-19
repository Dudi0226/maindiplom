const { DataTypes, Model } = require("sequelize");
const db = require("../services/database");
const moment = require("moment");
const Counts = require("./counts");
const Invoices = require("./invoice");
const Admins = require("./admins");

class News extends Model {}

News.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    newsdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    newsimage: {
      type: DataTypes.STRING,
    },
    adminid: {
      type: DataTypes.INTEGER,
      references: {
        model: Admins,
        key: "id",
      },
    },
  },
  {
    sequelize: db,
    modelName: "news",
    freezeTableName: true,
    tableName: "news",
  }
);

News.belongsTo(Admins, {
  foreignKey: "adminid",
  targedKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = News;
