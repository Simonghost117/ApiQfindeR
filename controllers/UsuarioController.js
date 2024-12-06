let UsuarioService = require ('../services/UsuarioService');


class UsuarioController {
    static async obtenerUsuario ( req, res ) {
        try {
            let usuario = await UsuarioService.obtenerT();
            res.json(usuario);
        } catch (e) {
            res.json(e);
        }
    }
    static async obtenerUsuarioId  (req, res) {
        try {
            let resultado = await UsuarioService.obtenerUsuarioId(req.params.id);
            res.json(resultado);
        } catch (e) {
            console.log ("Error usuario no encontrado");
        }
    }
    static async crearUsuario (req, res) {
        try {
            let rest = await UsuarioService.crearUsuario(req.body);
            res.json(rest);
        } catch (e) {
            console.log ("Error al crear el Usuario")
        }

    }
    static async actualizarUsuario (req, res) {
        try {
            let respuesta = await UsuarioService.actualizarUsuario (req.params.id,req.body);
            if (respuesta == 0) { 
                return res.json ({mensaje: "Usuario no encontrado o no actualizado"});
            }
                return res.json({mensaje: "Usuario actualizado"})
        } catch (e) {
            res.json ({mensaje:"Error al actualizar el usuario"});
        }
    }
    static async eliminarUsuario (req, res) {
        try {
            let borrar = await UsuarioService.eliminarUsuario(req.params.id);
            if (borrar == 0) { 
                return res.json ({mensaje: "Usuario no encontrado o no eliminado"});
            }
                return res.json({mensaje: "Usuario eliminado"})
        } catch (e) {
            console.log ("Error al eliminar el usuario");
            res.json ({mensaje: "Error no se pudo borrar el usuario"})
        }
    }
}

module.exports = UsuarioController;