/**
 * Created by jerem_000 on 02/07/2016.
 */
/**
 * Created by jerem_000 on 02/07/2016.
 */
var Atividade = require('../models/atividade');

function  AtividadeController (){

}

AtividadeController.prototype.insert = function (body, callback) {
    var atividade = new Atividade(body);
    atividade.save(function (err, result) {
        if(err){
            callback(null,err);
        }else{
            var id = {id: result._id}
            Atividade.findByIdAndUpdate(result._id, {$set: id},function (error, status) {
                if(error){
                    callback(error)
                } else{
                    callback({sucesso: 'true', msg: "Cadastrado com sucesso." });
                };
            })
        }
    })
}

AtividadeController.prototype.listar = function (callback) {
    Atividade.find({},function (error, atividades) {
        if (error) {
            callback(null,{status: 'Erro ao buscar usuários'});
        } else {
            callback(atividades);
        }
    });
}

AtividadeController.prototype.getForId = function (id, callback) {
    Atividade.findOne({_id: id},function (error, atividade) {
        if(error){
            callback(null,{status: 'Erro ao buscar usuários'});
        }else{
            callback(atividade);
        }
    })
};

AtividadeController.prototype.deleteById = function (id, callback) {
    Atividade.remove({_id: id}, function (error, status) {
        if(error){
            callback({sucesso: 'false', msg: 'Não foi possível remover'});
        }else{
            callback({sucesso: 'true', msg: 'Removido com sucesso.'})
        }
    });
}

AtividadeController.prototype.update = function (id, body, callback) {
    Atividade.findByIdAndUpdate(id, {$set: body},function (error, status) {
        if(error){
            callback(error)
        } else{
            callback({sucesso: 'true', msg: "Atualizado com sucesso." });
        };
    })
}

module.exports = AtividadeController;