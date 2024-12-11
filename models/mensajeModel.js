const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Conexión a la base de datos
const Usuario = require('./UsuarioModel'); // Asegúrate de importar correctamente el modelo Usuario

const Mensaje = sequelize.define('Mensaje', {
  ID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  EmisorID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ReceptorID: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  Contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  FechaHora: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
  },
}, {
  tableName: 'Mensajes',
  timestamps: false,
});

// Asociaciones con Usuario
Mensaje.belongsTo(Usuario, { foreignKey: 'EmisorID', as: 'Emisor' });
Mensaje.belongsTo(Usuario, { foreignKey: 'ReceptorID', as: 'Receptor' });

module.exports = Mensaje;
