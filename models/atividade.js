/**
 * Created by jerem_000 on 02/07/2016.
 */
/**
 * Created by jerem_000 on 24/06/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AtividadeSchema = new Schema({
    id:{
       type: String
    },
    titulo:{
        type: String,
        required: true
    },
    descricao:{
        type: String
    },
    conteudo:{
        type: String,
        required: true
    },
    id_usuario:{
        type: String,
        required: true
    },
    dataInicio:{
        type: Date
    },
    dataTermino:{
        type: Date
    },
    foto:{
        type: String,
    }

});

module.exports = mongoose.model('Atividade', AtividadeSchema);
