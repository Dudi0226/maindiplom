const { DataTypes, Model } = require("sequelize");
const db = require("../services/database");
const moment = require("moment");
const Counts = require("./counts");

class Count_image extends Model {}

Count_image.init(
  {
    countid: {
      type: DataTypes.INTEGER,
      references: {
        model: Counts,
        key: "id",
      },
    },
    imageurl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "countimage",
    freezeTableName: true,
    tableName: "countimage",
  }
);

Count_image.belongsTo(Counts, {
  foreignKey: "countid",
  targedKey: "id",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

module.exports = Count_image;
