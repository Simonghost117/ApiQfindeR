const express=require('express');
let pacienteController=require('../controllers/PacienteController');

let router=express.Router();
router.get('/pacientes',pacienteController.obtenerPacientes);
router.get('/pacientes/:id',pacienteController.obtenerPacientesId);
router.post('/pacientes',pacienteController.registrarPacientes);
router.put('/pacientes/:id',pacienteController.actualizarPacientes);
router.delete('/pacientes/:id',pacienteController.eliminarPacientes);


module.exports = router;