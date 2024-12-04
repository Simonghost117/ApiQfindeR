let ActividadService = require("../services/ActividadService");

class ActividadController {
  static async obtenerActividad(req, res) {
    try {
      let obtener = await ActividadService.obtenerActividad();
      res.json(obtener);
    } catch (e) {
      console.log("Error al obtener los Actividad:", e);
      res.json({ mensaje: "No se pudieron obtener los Actividad." });
    }
  }
    
  static async obtenerActividadId(req, res) {
    try {
      let resultado = await ActividadService.obtenerActividadId(req.params.id);
      if (!resultado) {
        return res.json({ mensaje: "Actividad no encontrada" });
      }
      res.json(resultado);
    } catch (e) {
      console.log("Error al obtener el Paciente por ID:", e);
      res.json({ mensaje: "Error al obtener el Paciente." });
    }
  }

  static async registrarActividad(req, res) {
    try {
      let register = await ActividadService.registrarActividad(req.body);
      res.json(register);
    } catch (e) {
      console.log("Error al registrar el ACtividad:", e);
      res.json({ mensaje: "Error al registrar el ACtividad." });
    }
  }

  static async actualizarActividad(req, res) {
    try {
      let actualizar = await ActividadService.actualizarActividad(
        req.params.id,
        req.body
      );
      if (actualizar == 0) {
        return res.json({ mensaje: "ACtividad no encontrado o no actualizado" });
      } else {
        return res.json({ mensaje: "ACtividad actualizado correctamente" });
      }
    } catch (e) {
      console.log("Error al actualizar la ACtividad:", e);
      res.json({ mensaje: "Error al actualizar el ACtividad." });
    }
  }

  static async eliminarActividad(req, res) {
    try {
      let eliminar = await ActividadService.eliminarActividad(req.params.id);
      if (eliminar == 0) {
        return res.json({ mensaje: "ACtividad no encontrada o no eliminada" });
      } else {
        return res.json({ mensaje: "ACtividad eliminada correctamente" });
      }
    } catch (e) {
      console.log("Error al eliminar la ACtividad:", e);
      res.json({ mensaje: "Error al eliminar la ACtividad." });
    }
  }
}

module.exports=ActividadController;