const { DataTypes, Model } = require("sequelize");
const db = require("../services/database");
const moment = require("moment");
const Admins = require("./admins");

class Users extends Model {}

Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    adminid: {
      type: DataTypes.INTEGER,
      references: {
        model: Admins,
        key: "id",
      },
    },
    username: {
      type: DataTypes.STRING,
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
    usercode: {
      type: DataTypes.STRING,
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
    },
    profileimage: {
      type: DataTypes.STRING,
    },
    verified: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize: db,
    modelName: "users",
    freezeTableName: true,
    tableName: "user",
  }
);

Users.belongsTo(Admins, {
  foreignKey: "adminid",
  targedKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Users;
