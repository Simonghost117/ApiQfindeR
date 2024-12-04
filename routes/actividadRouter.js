const express = require('express');
let ActividadController=require('../controllers/ActividadController');

let router = express.Router();

router.get('/actividades',ActividadController.obtenerActividad);
router.get('/actividades/:id',ActividadController.obtenerActividadId);
router.post('/actividades',ActividadController.registrarActividad);
router.put('/actividades/:id',ActividadController.actualizarActividad);
router.delete('/actividades/:id',ActividadController.eliminarActividad);


module.exports = router;