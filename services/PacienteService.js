let paciente = require("../models/pacienteModel");

class PacienteService {
  static async obtenerPacientes() {
    try {
      let obtenerP = await paciente.findAll();
      return obtenerP;
    } catch (e) {
      console.log(e);
    }
  }
  static async registrarPacientes(datos) {
    try {
      let registarPaciente = await paciente.create(datos);
      return registarPaciente;
    } catch (err) {
      console.log(err);
    }
  }
  static async obtenerPacientesId(id) {
    try {
      let Paciente = await paciente.findByPk(id);
      if (!Paciente) {
        console.log("Paciente no encontrado");
      } else {
        return Paciente;
      }
    } catch (e) {
      console.log("error al obtener el Paciente");
    }
  }

  static async actualizarPacientes(id, datos) {
    try {
      let actualizar = await paciente.update(datos, { where: { id } });
      if (actualizar == 0) {
        console.log("no se encontro el Paciente a actualizar");
      } else {
        return actualizar;
      }
    } catch (e) {
      console.log("Error al actualizar");
    }
  }
  static async eliminarPacientes(id) {
    let eliminar = await paciente.destroy({ where: { id } });
    if (eliminar == 0) {
      console.log("No se encontro el Paciente a eliminar");
    } else {
      return eliminar;
    }
  }
}

module.exports = PacienteService;
