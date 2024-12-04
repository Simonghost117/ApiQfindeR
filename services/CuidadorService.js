let Cuidador = require('../models/CuidadorModel');

class CuidadorService{
    static async obtenerCuidador(){
        try{
            let tarea = await Cuidador.findAll();
            return tarea;
        } catch (e){
            console.log('Error al obtener los datos del cuidador' + e)
        }
    }
    static async crearCuidador(datos){
        try{
            let tarea = await Cuidador.create(datos);
            return tarea;
        }catch(e){
            console.log('Error al crear el perfil del Cuidador'+ e)
        }
    }
    static async actualizarCuidador(id, datos) {
        try {
            let [ actualizar ] = await Cuidador.update(datos, { where: { id } });

            if (actualizar == 0) {
                console.log('Cuidador no encontrado');
            } else {
                return datos;
            }
        } catch (e) {
            console.log('Error al actualizar los datos del Cuidador: ' + e);  
        }
    }
    static async eliminarCuidador(id){
        try{
            let tarea = await Cuidador.findByPk(id);
            if(!tarea){
                console.log('Cuidador no encontrado')
            }else{
                let eliminar = await Cuidador.destroy( {where: { id }});
                return eliminar;
            }
        } catch(e) {
            console.log('Error al eliminar el Cuidador', e);
        }
    }
}
module.exports = CuidadorService