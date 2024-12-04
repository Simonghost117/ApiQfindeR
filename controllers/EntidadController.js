let EntidadService = require("../services/EntidadService");

class EntidadController {
  static async obtenerEntidad(req, res) {
    try {
      let obtener = await EntidadService.obtenerEntidad();
      res.json(obtener);
    } catch (e) {
      console.log("Error al obtener los Entidades:", e);
      res.json({ mensaje: "No se pudieron obtener las Entidades." });
    }
  }
    
  static async obtenerEntidadId(req, res) {
    try {
      let resultado = await EntidadService.obtenerEntidadId(req.params.id);
      if (!resultado) {
        return res.json({ mensaje: "Entidad no encontrado" });
      }
      res.json(resultado);
    } catch (e) {
      console.log("Error al obtener la entidad por ID:", e);
      res.json({ mensaje: "Error al obtener la Entidad." });
    }
  }

  static async registrarEntidad(req, res) {
    try {
      let register = await EntidadService.registrarEntidad(req.body);
      res.json(register);
    } catch (e) {
      console.log("Error al registrar la Entidad:", e);
      res.json({ mensaje: "Error al registrar la Entidad." });
    }
  }

  static async actualizarEntidad(req, res) {
    try {
      let actualizar = await EntidadService.actualizarEntidad(
        req.params.id,
        req.body
      );
      if (actualizar == 0) {
        return res.json({ mensaje: "Entidad no encontrada o no actualizada" });
      } else {
        return res.json({ mensaje: "Entidad actualizada correctamente" });
      }
    } catch (e) {
      console.log("Error al actualizar la Entidad:", e);
      res.json({ mensaje: "Error al actualizar la Entidad." });
    }
  }

  static async eliminarEntidad(req, res) {
    try {
      let eliminar = await EntidadService.eliminarEntidad(req.params.id);
      if (eliminar == 0) {
        return res.json({ mensaje: "Entidad no encontrada o no eliminada" });
      } else {
        return res.json({ mensaje: "Entidad eliminada correctamente" });
      }
    } catch (e) {
      console.log("Error al eliminar la Entidad:", e);
      res.json({ mensaje: "Error al eliminar la Entidad." });
    }
  }
}

module.exports = EntidadController;