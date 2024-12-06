const express = require('express');
let nMedicasController=require('../controllers/NMedicasController');

let router=express.Router();
router.get('/nota',nMedicasController.getAll);
router.get('/nota/:id',nMedicasController.getOneById);
router.post('/nota',nMedicasController.create);
router.put('/nota/:id',nMedicasController.update);
router.delete('/nota/:id',nMedicasController.delete);

module.exports = router;
