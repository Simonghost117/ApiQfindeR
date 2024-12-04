const express = require('express');
let entidadController=require('../controllers/EntidadController');

let router=express.Router();
router.get('/entidad',entidadController.obtenerEntidad);
router.get('/entidad/:id',entidadController.obtenerEntidadId);
router.post('/entidad',entidadController.registrarEntidad);
router.put('/entidad/:id',entidadController.actualizarEntidad);
router.delete('/entidad/:id',entidadController.eliminarEntidad);

module.exports = router;
