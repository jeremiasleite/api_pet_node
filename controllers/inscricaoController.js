/**
 * Created by jerem_000 on 02/07/2016.
 */
var Inscricao = require('../models/inscricao');

function  InscricaoController (){

}
InscricaoController.prototype.insert = function (body, callback) {
    var inscricao = new Inscricao(body);
    inscricao.save(function (err, result) {
        if(err){
            callback(null,err);
        }else{
            var id = {id: result._id}
            Inscricao.findByIdAndUpdate(result._id, {$set: id},function (error, status) {
                if(error){
                    callback(error)
                } else{
                    callback({sucesso: 'true', msg: "Cadastrado com sucesso." });
                };
            })
        }
    })
}

InscricaoController.prototype.listar = function (callback) {
    Inscricao.find({},function (error, inscricoes) {
        if (error) {
            callback(null,{status: 'Erro ao buscar usuários'});
        } else {
            callback(inscricoes);
        }
    });
}

InscricaoController.prototype.getForId = function (id, callback) {
    Inscricao.findOne({_id: id},function (error, inscricao) {
        if(error){
            callback(null,{status: 'Erro ao buscar.'});
        }else{
            callback(inscricao);
        }
    })
};

InscricaoController.prototype.deleteById = function (id, callback) {
    Inscricao.remove({_id: id}, function (error, status) {
        if(error){
            callback({sucesso: 'false', msg: 'Não foi possível remover'});
        }else{
            callback({sucesso: 'true', msg: 'Removido com sucesso.'})
        }
    });
}

InscricaoController.prototype.update = function (id, body, callback) {
    Inscricao.findByIdAndUpdate(id, {$set: body},function (error, status) {
        if(error){
            callback(error)
        } else{
            callback({sucesso: 'true', msg: "Atualizado com sucesso." });
        };
    })
}

module.exports = InscricaoController;
