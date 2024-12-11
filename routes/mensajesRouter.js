// routes/mensajesRouter.js
const express = require('express');
const MensajesController = require('../controllers/mensajesController');
const router = express.Router();

// Ruta para enviar un mensaje
router.post('/mensajes', MensajesController.enviarMensaje);

// Ruta para obtener los mensajes de un usuario específico
router.get('/mensajes/:id', MensajesController.obtenerMensajesId);

module.exports = router;
