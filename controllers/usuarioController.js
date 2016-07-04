/**
 * Created by jerem_000 on 24/06/2016.
 */
var Usuario = require('../models/usuario');

function  UsuarioController (){
}

UsuarioController.prototype.inserir = function (body, callback) {
    var usuario = new Usuario();
    usuario.nome = body.nome;
    usuario.email = body.email;
    usuario.senha = body.senha;
    usuario.curso = body.curso;
    usuario.flag = body.flag;
    usuario.login = body.login;
    usuario.save(function (err, result) {
        if(err){
            callback({sucesso: false, status: err})
        }else{
            var id = {id: result._id}
            Usuario.findByIdAndUpdate(result._id, {$set: id},function (error, status) {
                if(error){
                    callback(error)
                } else{
                    callback({sucesso: 'true', msg: "Cadastrado com sucesso." });
                };
            })
        }
    })
}

UsuarioController.prototype.listar = function (callback) {
    Usuario.find({},function (error, usuarios) {
        if (error) {
            callback(null,{status: 'Erro ao buscar usuários'});
        } else {
            callback(usuarios);
        }
    });
}

UsuarioController.prototype.getForId = function (id, callback) {
    Usuario.findOne({_id: id},function (error, usuario) {
        if(error){
            callback(null,{status: 'Erro ao buscar usuários'});
        }else{
            callback(usuario);
        }
    })
};
UsuarioController.prototype.buscarNome = function(nome, callback) {
    Usuario.find({nome: new RegExp(nome, "i")}, function (error, usuarios) {
        if (error) {
            callback(null,{status: 'Erro ao buscar usuários'});
        } else {
            callback(usuarios);
        }
    });
};
UsuarioController.prototype.login = function(body, callback) {
    if (body && body.login && body.senha) {
        //var passwordHash = sha512(body.password).toString('hex');
        Usuario.find({ login: body.login, senha: body.senha}, function (error, usuario) {
            if (error) {
                callback(null, {error: 'Erro ao buscar usuários'});
            } else {
                if (usuario.length > 0) {
                    callback(usuario[0]);
                } else {
                    callback(null, { error: 'E-mail ou senha inválidos.' });
                }
            }
        });
    } else {
        callback(null, { error: 'E-mail ou senha inválidos.' });
    }
};

module.exports = UsuarioController;