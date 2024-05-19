const { DataTypes, Model } = require("sequelize");
const db = require("../services/database");
const moment = require("moment");
const Users = require("./users");

class Counts extends Model {}

Counts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    userid: {
      type: DataTypes.INTEGER,
      references: {
        model: Users,
        key: "id",
      },
    },
    coldwater: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hotwater: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    wastewater: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    countdate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    amount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: "counts",
    freezeTableName: true,
    tableName: "count",
  }
);

Counts.belongsTo(Users, {
  foreignKey: "userid",
  targedKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Counts;
