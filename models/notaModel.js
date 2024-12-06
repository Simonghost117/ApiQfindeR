const DataTypes = require("sequelize");
const sequelize = require("../config/database");
const Paciente = require("./pacienteModel");
const Usuario = require("./UsuarioModel");

const NotaMedica = sequelize.define(
  "Nota_Medica",
  {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PacienteID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Paciente,
            key: "ID",
        }
    },
    AutorID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Usuario,
            key: "ID",
        }
    },
    Contenido: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    FechaHora: {
        type: DataTypes.DATE,
        default: DataTypes.NOW
    }
  },
  {
    tableName: "nota_medica",
    timestamps: false, // No agregar columnas createdAt y updatedAt
  }
);

module.exports = NotaMedica;
