// const Cuidador = require('../models/CuidadorModel');

let CuidadorService = require('../services/CuidadorService');

class CuidadorController{

    static async traerCuidador(req, res){
        try {
            let tareas = await CuidadorService.obtenerCuidador();
            res.json(tareas)
        } catch (error) {
            res.json({error: `Error al obtener el Cuidador: ${error}`})
        }
    };
    static async adicionarCuidador(req, res){
        try{
            let tarea = await CuidadorService.crearCuidador(req.body);
            res.json(tarea)
        } catch (e) {
            res.json('Error al agregar el Cuidador ' + e)
        }
    };
    static async actualizarCuidador(req, res){
        try{
            let tarea = await CuidadorService.actualizarCuidador(req.params.id ,req.body);
            res.json(tarea)
        } catch(e) {
            res.json({e: 'Error al actualizar los datos del Cuidador' + e})
        }
    };
    static async eliminarCuidador(req, res) {
        try{
            let tarea = await CuidadorService.eliminarCuidador(req.params.id);
            res.json(tarea)
        }catch(e){
            res.json({e: 'Error al eliminar el Cuidador'})
        }
    };
}

module.exports = CuidadorController