// services/mensajeService.js
const Mensaje = require('../models/mensajeModel');
const Usuario = require('../models/UsuarioModel'); // Asegúrate de importar el modelo Usuario

class MensajeService {
    static async enviarMensaje(emisorId, receptorId, contenido) {
        try {
            // Validar que los IDs existen
            const emisor = await Usuario.findByPk(emisorId);
            const receptor = await Usuario.findByPk(receptorId);

            if (!emisor || !receptor) {
                throw new Error("Emisor o receptor no encontrado");
            }

            // Crear el mensaje
            const mensaje = await Mensaje.create({
                EmisorID: emisorId,
                ReceptorID: receptorId,
                Contenido: contenido,
            });

            return mensaje;
        } catch (error) {
            console.error("Error al enviar mensaje:", error);
            throw error;
        }
    }

    // Función para obtener los mensajes de un usuario
    static async obtenerMensajesId(id) {
        try {
          // Consultar el mensaje por ID
          const mensaje = await Mensaje.findOne({
            where: { ID: id },
            include: [
              { model: Usuario, as: 'Emisor' },
              { model: Usuario, as: 'Receptor' }
            ],
          });
    
          // Si el mensaje no existe, retornamos null
          if (!mensaje) {
            return null;
          }
    
          // Si el mensaje existe, lo retornamos
          return mensaje;
        } catch (error) {
          console.error("Error al obtener el mensaje:", error);
          throw error;
        }
      }
}


module.exports = MensajeService;
