/**
 * Created by jerem_000 on 03/07/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MensagemSchema = new Schema({
    id:{
        type: String
    },
    mensagem:{
        type: String,
        required: true
    },
    nomeEmissor:{
        type: String,
        required: true
    },
    emailEmissor:{
        type: String,
        required: true
    },
    id_usuario:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Mensagem', MensagemSchema);
