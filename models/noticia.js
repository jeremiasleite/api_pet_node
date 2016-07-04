/**
 * Created by jerem_000 on 24/06/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NoticiaSchema = new Schema({
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
    data:{
        type: Date,
        default: Date.now()
    },
    foto:{
        type: String,
    }
});

module.exports = mongoose.model('Noticia', NoticiaSchema);
