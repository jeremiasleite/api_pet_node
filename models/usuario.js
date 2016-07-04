/**
 * Created by jerem_000 on 24/06/2016.
 */
//var funcoes = require('../funcoes');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    id: {
        type: String
    },
    nome: {
        type: String,
        required: true
    },
    login:{
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        validate: {
            validator: function(v) {
                var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                return filter.test(v)
            },
            message: '{VALUE} Este email não é um email válido!'
        },
        required: [true,'Por favor inserir um email!'],
        trim: true,
        unique: [true,'Email já existe no cadastro, digite outro email!']
    },
    senha: {
        type: String,
        trim: true,
        required: true
    },
    curso: {
        type: String
    },
    flag: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Usuario', UsuarioSchema);