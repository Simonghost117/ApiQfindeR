const express = require('express');
let CuidadorController = require('../controllers/CuidadorController')

let router = express.Router();

router.get('/cuidador', CuidadorController.traerCuidador);
router.post('/cuidador', CuidadorController.adicionarCuidador);
router.put('/cuidador/:id', CuidadorController.actualizarCuidador);
router.delete('/cuidador/:id', CuidadorController.eliminarCuidador);



module.exports = router;