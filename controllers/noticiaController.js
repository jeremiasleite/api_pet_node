/**
 * Created by jerem_000 on 02/07/2016.
 */
var Noticia = require('../models/noticia');

function  NoticiaController (){

}

NoticiaController.prototype.insert = function (body, callback) {
    var noticia = new Noticia(body);
    noticia.save(function (err,result) {
        if(err){
            callback(null,err);
        }else{
            var id = {id: result._id}
            Noticia.findByIdAndUpdate(result._id, {$set: id},function (error, status) {
                if(error){
                    callback(error)
                } else{
                    callback({sucesso: 'true', msg: "Cadastrado com sucesso." });
                };
            })
        }
    })
}

NoticiaController.prototype.listar = function (callback) {
    Noticia.find({},function (error, noticias) {
        if (error) {
            callback(null,{status: 'Erro ao buscar usuários'});
        } else {
            callback(noticias);
        }
    });
}

NoticiaController.prototype.getForId = function (id, callback) {
    Noticia.findOne({_id: id},function (error, noticia) {
        if(error){
            callback(null,{status: 'Erro ao buscar usuários'});
        }else{
            callback(noticia);
        }
    })
};

NoticiaController.prototype.deleteById = function (id, callback) {
    Noticia.remove({_id: id}, function (error, status) {
        if(error){
            callback({sucesso: 'false', msg: 'Não foi possível remover'});
        }else{
            callback({sucesso: 'true', msg: 'Removido com sucesso.'})
        }
    });
}

NoticiaController.prototype.update = function (id, body, callback) {
    Noticia.findByIdAndUpdate(id, {$set: body},function (error, status) {
        if(error){
            callback(error)
        } else{
            callback({sucesso: 'true', msg: "Atualizado com sucesso." });
        };
    })
}

module.exports = NoticiaController;