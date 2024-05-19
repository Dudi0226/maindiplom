const { DataTypes, Model } = require("sequelize");
const db = require("../services/database");
const moment = require("moment");

class Admins extends Model {}

Admins.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    phonenumber: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    organzationcode: {
      type: DataTypes.STRING,
      unique: true,
    },
    profileimage: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db,
    modelName: "admins",
    freezeTableName: true,
    tableName: "admin",
  }
);

module.exports = Admins;
