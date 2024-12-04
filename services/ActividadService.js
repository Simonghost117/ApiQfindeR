let actividad = require("../models/actividadModel");
const Paciente = require("../models/pacienteModel");
const Cuidador = require('../models/cuidadorModel');

class Actividad {
  static async obtenerActividad() {
    try {
      const obtenerP = await actividad.findAll({
        include: [
          {
            model: require("../models/cuidadorModel"),
            as: "cuidador", // Alias definido en belongsTo
            attributes: ["Nombre"],
          },
          {
            model: require("../models/pacienteModel"),
            as: "paciente", // Alias definido en belongsTo
            attributes: ["Nombre"],
          },
        ],
      });

      return obtenerP;
    } catch (e) {
      console.log(e);
    }
  }
  
  static async registrarActividad(datos) {
    try {
      let registarActividad = await actividad.create(datos);
      return registarActividad;
    } catch (err) {
      console.log(err);
    }
  }
  static async obtenerActividadId(id) {
    try {
      let Actividad = await actividad.findByPk(id);
      if (!Actividad) {
        console.log("Actividad no encontrado");
      } else {
        return Actividad;
      }
    } catch (e) {
      console.log("error al obtener el Actividad");
    }
  }

  static async actualizarActividad(id, datos) {
    try {
      let actualizar = await actividad.update(datos, { where: { id } });
      if (actualizar == 0) {
        console.log("no se encontro el Actividad a actualizar");
      } else {
        return actualizar;
      }
    } catch (e) {
      console.log("Error al actualizar");
    }
  }
  static async eliminarActividad(id) {
    let eliminar = await actividad.destroy({ where: { id } });
    if (eliminar == 0) {
      console.log("No se encontro el Actividad a eliminar");
    } else {
      return eliminar;
    }
  }
}

module.exports = Actividad;
