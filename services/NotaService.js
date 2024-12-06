let NotaModel = require('../models/notaModel');

class NotaService{
    static async getAll(){
        try{
            let nota = await NotaModel.findAll();
            return nota;
        } catch (e){
            console.log('Error al obtener las notas' + e)
        }
    }
    static async create(datos){
        try{
            let nota = await NotaModel.create(datos);
            return nota;
        }catch(e){
            console.log('Error al crear la nota'+ e)
        }
    }
    static async getOneById(id) {
        try {
          let Nota = await NotaModel.findByPk(id);
          if (!Nota) {
            console.log("La nota no fue encontrada");
          } else {
            return Nota;
          }
        } catch (e) {
          console.log("error al obtener la Nota Medica");
        }
      }

    static async update(id, datos) {
        try {
            let [ actualizar ] = await NotaModel.update(datos, { where: { id } });

            if (actualizar == 0) {
                console.log('Nota Medica no encontrada');
            } else {
                return datos;
            }
        } catch (e) {
            console.log('Error al actualizar los datos de la Nota Medica: ' + e);  
        }
    }
    static async delete(id){
        try{
            let nota = await NotaModel.findByPk(id);
            if(!nota){
                console.log('Nota Medica no encontrada')
            }else{
                let eliminar = await NotaModel.destroy( {where: { id }});
                return eliminar;
            }
        } catch(e) {
            console.log('Error al eliminar la Nota Medica', e);
        }
    }
}
module.exports = NotaService