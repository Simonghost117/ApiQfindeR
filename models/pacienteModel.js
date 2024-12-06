let DataTypes = require("sequelize");
let sequelize = require("../config/database");
const Entidad = require("./entidadModel");
const Usuario = require("./UsuarioModel")

let Paciente = sequelize.define(
  "Paciente",
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
    Edad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    TipoDependencia: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    ContactoEmergencia: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    EntidadID: {
      type: DataTypes.INTEGER,
      references: {
        model: "Entidad",
        key: "ID",
      },
    },
    UsuarioID:{
      type:DataTypes.INTEGER,
      references:{
          model: Usuario,
          key:'ID'
      }
  },
  },
  {
    tableName: "Paciente",
    timestamps: false,
  }
);
Paciente.belongsTo(Usuario, { foreignKey: "UsuarioID" });
Paciente.belongsTo(Entidad, { foreignKey: 'EntidadID', as: 'EntidadRelacionada' });

module.exports = Paciente;
