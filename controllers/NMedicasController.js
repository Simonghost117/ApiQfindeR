let NotaService = require("../services/NotaService");

class NotaMedicaController {
  static async getAll(req, res) {
    try {
      let obtener = await NotaService.getAll();
      res.json(obtener);
    } catch (e) {
      console.log("Error al obtener los Entidades:", e);
      res.json({ mensaje: "No se pudieron obtener las Entidades." });
    }
  }
    
  static async getOneById(req, res) {
    try {
      let resultado = await NotaService.getOneById(req.params.id);
      if (!resultado) {
        return res.json({ mensaje: "Entidad no encontrado" });
      }
      res.json(resultado);
    } catch (e) {
      console.log("Error al obtener la entidad por ID:", e);
      res.json({ mensaje: "Error al obtener la Entidad." });
    }
  }

  static async create(req, res) {
    try {
      let register = await NotaService.create(req.body);
      res.json(register);
    } catch (e) {
      console.log("Error al registrar la Entidad:", e);
      res.json({ mensaje: "Error al registrar la Entidad." });
    }
  }

  static async update(req, res) {
    try {
      let actualizar = await NotaService.update(
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

  static async delete(req, res) {
    try {
      let eliminar = await NotaService.delete(req.params.id);
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

module.exports = NotaMedicaController;