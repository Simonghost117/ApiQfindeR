// controllers/mensajesController.js
const MensajeService = require('../services/mensajeService');

class MensajesController {
    static async enviarMensaje(req, res) {
        try {
            const { emisorId, receptorId, contenido } = req.body;
            
            // Llamamos al servicio para enviar el mensaje
            const mensaje = await MensajeService.enviarMensaje(emisorId, receptorId, contenido);
            
            // Respondemos con el mensaje enviado
            res.status(201).json({
                mensaje: mensaje,
            });
        } catch (error) {
            console.error("Error en el controlador:", error);
            res.status(500).json({ error: error.message });
        }
    }

    static async obtenerMensajesId(req, res) {
        try {
          // Llamamos al servicio para obtener el mensaje por ID
          const resultado = await MensajeService.obtenerMensajesId(req.params.id);
          
          // Si no se encuentra el mensaje, respondemos con un mensaje adecuado
          if (!resultado) {
            return res.status(404).json({ mensaje: "Mensaje no encontrado" });
          }
    
          // Si se encuentra el mensaje, lo devolvemos
          res.status(200).json(resultado);
        } catch (e) {
          console.log("Error al obtener el mensaje por ID:", e);
          res.status(500).json({ mensaje: "Error al obtener el mensaje." });
        }
      }
}

module.exports = MensajesController;
