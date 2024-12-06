const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 

const Usuario = sequelize.define('Usuario', {
    Nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    Identificacion: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    CorreoElectronico: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    Contrasena: {
        type: DataTypes.STRING(255),
        allowNull: false,
    },
    Rol: {
        type: DataTypes.ENUM('Acudiente', 'Cuidador', 'Entidad'),
        allowNull: false,
    },
    FechaRegistro: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
  tableName: 'usuarios', 
  timestamps: false, 
});

module.exports = Usuario;

