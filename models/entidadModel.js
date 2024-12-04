const DataTypes = require("sequelize");
const sequelize = require("../config/database");

const Entidad = sequelize.define(
  "Entidad",
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
    Identificacion: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: false,//cambiar a true cuando se agreguen los endpoints de entidad!!!!
    },
    Contacto: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    InformacionServicio: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "Entidad",
    timestamps: false, // No agregar columnas createdAt y updatedAt
  }
);

module.exports = Entidad;
