let DataTypes = require("sequelize");
let sequelize = require("../config/database");
const Entidad = require("./entidadModel");

let cuidador = sequelize.define(
  "Cuidador",
  {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    Nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    Edad:{
      type:DataTypes.INTEGER,
      allowNull: true
      
  },
  Estudios:{
      type:DataTypes.STRING,
      allowNull: true
  },
  EntidadID:{
      type:DataTypes.INTEGER,
      references:{
          model: Entidad,
          key:'ID'
      }
  },
  
  },
  {
    tableName: "Cuidador",
    timestamps: false,
  }
);
cuidador.belongsTo(Entidad, { foreignKey: "EntidadID" });
module.exports = cuidador;
