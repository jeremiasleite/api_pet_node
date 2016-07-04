/**
 * Created by jerem_000 on 24/06/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InscricaoSchema = new Schema({
    id:{
        type: String
    },
    nome:{
        type: String,
        required: true
    },
    curso:{
        type: String
    },
    matricula:{
        type: String
    },
    foto:{
        type: String
    },
    motivo:{
        type: String
    },
    observacoes:{
        type: String,
    }
});

module.exports = mongoose.model('Inscricao', InscricaoSchema);

