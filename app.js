var express = require('express'),
    bodyParser = require('body-parser'),
    app = express();
var cors = require('cors');
var mongoose = require('mongoose');
//var urlBd = 'mongodb://jeremiasleite:batista@ds011238.mlab.com:11238/gescola';
var urlBd = 'mongodb://localhost/pet';
mongoose.connect(urlBd,function(err, res){
    if(err){
        console.log('não foi possivel conectar ..');
    }else{
        console.log('Conectado ...');
    }
});
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.use('/usuario', require('./routes/usuarioRoute'));
app.use('/noticia', require('./routes/noticiaRouter'));
app.use('/atividade', require('./routes/atividadeRoute'));
app.use('/mensagem', require('./routes/mensagemRoute'));
app.use('/inscricao', require('./routes/inscricaoRoute'));

app.listen(9000, function () {
    console.log('Server running at port 9000');
});