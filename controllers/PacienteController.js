let PacienteService = require("../services/PacienteService");

class PacientesController {
  static async obtenerPacientes(req, res) {
    try {
      let obtener = await PacienteService.obtenerPacientes();
      res.json(obtener);
    } catch (e) {
      console.log("Error al obtener los Pacientes:", e);
      res.json({ mensaje: "No se pudieron obtener los Pacientes." });
    }
  }
    
  static async obtenerPacientesId(req, res) {
    try {
      let resultado = await PacienteService.obtenerPacientesId(req.params.id);
      if (!resultado) {
        return res.json({ mensaje: "Paciente no encontrado" });
      }
      res.json(resultado);
    } catch (e) {
      console.log("Error al obtener el Paciente por ID:", e);
      res.json({ mensaje: "Error al obtener el Paciente." });
    }
  }

  static async registrarPacientes(req, res) {
    try {
      let register = await PacienteService.registrarPacientes(req.body);
      res.json(register);
    } catch (e) {
      console.log("Error al registrar el Paciente:", e);
      res.json({ mensaje: "Error al registrar el Paciente." });
    }
  }

  static async actualizarPacientes(req, res) {
    try {
      let actualizar = await PacienteService.actualizarPacientes(
        req.params.id,
        req.body
      );
      if (actualizar == 0) {
        return res.json({ mensaje: "Paciente no encontrado o no actualizado" });
      } else {
        return res.json({ mensaje: "Paciente actualizado correctamente" });
      }
    } catch (e) {
      console.log("Error al actualizar el Paciente:", e);
      res.json({ mensaje: "Error al actualizar el Paciente." });
    }
  }

  static async eliminarPacientes(req, res) {
    try {
      let eliminar = await PacienteService.eliminarPacientes(req.params.id);
      if (eliminar == 0) {
        return res.json({ mensaje: "Paciente no encontrado o no eliminado" });
      } else {
        return res.json({ mensaje: "Paciente eliminado correctamente" });
      }
    } catch (e) {
      console.log("Error al eliminar el Paciente:", e);
      res.json({ mensaje: "Error al eliminar el Paciente." });
    }
  }
}

module.exports = PacientesController;