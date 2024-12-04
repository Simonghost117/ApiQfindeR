const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Paciente = require("./pacienteModel"); // Modelo Paciente
const Cuidador = require("./cuidadorModel"); // Modelo Cuidador

// Definición del modelo Actividad
const Actividad = sequelize.define(
  "Actividad",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PacienteID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Paciente, // Referencia al modelo Paciente
        key: "ID",
      },
    },
    CuidadorID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cuidador, // Referencia al modelo Cuidador
        key: "ID",
        
      },
    },
    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    FechaHora: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    QR_Code: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
  },
  {
    tableName: "Actividad",
    timestamps: false, // No usar timestamps automáticos (createdAt, updatedAt)
  }
);

// Relación con el modelo Paciente
Actividad.belongsTo(Paciente, { foreignKey: "PacienteID", as: "paciente" });

// Relación con el modelo Cuidador
Actividad.belongsTo(Cuidador, { foreignKey: "CuidadorID", as: "cuidador" });

module.exports = Actividad;
