/**
 * Created by jerem_000 on 02/07/2016.
 */
var Mensagem = require('../models/mensagem');

function  MensagemController (){

}

MensagemController.prototype.insert = function (body, callback) {
    var mensagem = new Mensagem(body);
    mensagem.save(function (err, result) {
        if(err){
            callback(null,err);
        }else{
            var id = {id: result._id}
            Mensagem.findByIdAndUpdate(result._id, {$set: id},function (error, status) {
                if(error){
                    callback(error)
                } else{
                    callback({sucesso: 'true', msg: "Cadastrado com sucesso." });
                };
            })
        }
    })
}

MensagemController.prototype.listar = function (callback) {
    Mensagem.find({},function (error, mensagems) {
        if (error) {
            callback(null,{status: 'Erro ao buscar.'});
        } else {
            callback(mensagems);
        }
    });
}

MensagemController.prototype.getForId = function (id, callback) {
    Mensagem.findOne({_id: id},function (error, mensagem) {
        if(error){
            callback(null,{status: 'Erro ao buscar usuários'});
        }else{
            callback(mensagem);
        }
    })
};

MensagemController.prototype.deleteById = function (id, callback) {
    Mensagem.remove({_id: id}, function (error, status) {
        if(error){
            callback({sucesso: 'false', msg: 'Não foi possível remover'});
        }else{
            callback({sucesso: 'true', msg: 'Removido com sucesso.'})
        }
    });
}

MensagemController.prototype.update = function (id, body, callback) {
    Mensagem.findByIdAndUpdate(id, {$set: body},function (error, status) {
        if(error){
            callback(error)
        } else{
            callback({sucesso: 'true', msg: "Atualizado com sucesso." });
        };
    })
}

module.exports = MensagemController;
