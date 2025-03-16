let Usuario = require('../models/UsuarioModel')


class UsuarioService {
    static async obtenerT () {
        try {
            let usuario = await Usuario.findAll();
            return usuario;
        } catch (e) {
            console.log (e)
        }
    }
    static async obtenerUsuarioId (id) {
        try {
            let usuario = await Usuario.findByPk (id);
            if (!usuario) {
                console.log ("Usuario no encontrado");
            }
            else {
                return usuario;
            }
        } catch (e) {
            console.log ("Error al obtener el usuario");
        }
    }
    static async crearUsuario (datos) {
        console.log(datos)
        try {
            let usuariito = await Usuario.create(datos);
            return usuariito;
        } catch (e) {
            console.log(e)
            console.log ("Usuario no creado")
        }
    }
    static async actualizarUsuario (id, data) {
        try {
            let [actualizar] = await Usuario.update(data, {where:{id}});
            if (actualizar == 0) {
                console.log ("No se encontro el Usuario a actualizar")
            }
            else {
                return data;
            }
        } catch (e) {
            console.log ("Error al actualizar el usuario")
        }
    }
    static async eliminarUsuario (id) {
        try {
            let borrar = await Usuario.destroy ({where : {id}});
            if (borrar == 0) {
                console.log ("No se encontro el usuario a borrar")
            }
            else {
                return borrar;
            }          
        } catch (e) {

        }
    }
}

module.exports = UsuarioService