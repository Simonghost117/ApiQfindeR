let Entidad = require('../models/entidadModel');

class EntidadService{
    static async obtenerEntidad(){
        try{
            let tarea = await Entidad.findAll();
            return tarea;
        } catch (e){
            console.log('Error al obtener los datos del la Entidad' + e)
        }
    }
    static async crearEntidad(datos){
        try{
            let tarea = await Entidad.create(datos);
            return tarea;
        }catch(e){
            console.log('Error al crear el perfil de la Entidad'+ e)
        }
    }
    static async registrarEntidad(datos) {
        try {
          let registarPaciente = await Entidad.create(datos);
          return registarPaciente;
        } catch (err) {
          console.log(err);
        }
      }
    static async obtenerEntidadId(id) {
        try {
          let Paciente = await Entidad.findByPk(id);
          if (!Paciente) {
            console.log("Entidad no encontrada");
          } else {
            return Paciente;
          }
        } catch (e) {
          console.log("error al obtener la Entidad");
        }
      }

    static async actualizarEntidad(id, datos) {
        try {
            let [ actualizar ] = await Entidad.update(datos, { where: { id } });

            if (actualizar == 0) {
                console.log('Entidad no encontrada');
            } else {
                return datos;
            }
        } catch (e) {
            console.log('Error al actualizar los datos de la Entidad: ' + e);  
        }
    }
    static async eliminarEntidad(id){
        try{
            let tarea = await Entidad.findByPk(id);
            if(!tarea){
                console.log('Entidad no encontrada')
            }else{
                let eliminar = await Entidad.destroy( {where: { id }});
                return eliminar;
            }
        } catch(e) {
            console.log('Error al eliminar la Entidad', e);
        }
    }
}
module.exports = EntidadService