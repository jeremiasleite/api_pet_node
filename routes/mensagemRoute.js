/**
 * Created by jerem_000 on 02/07/2016.
 */
var express = require('express');
var router = express.Router();

var MensagemController = require('../controllers/mensagemController');
var mensagemController = new MensagemController();

router.route('/').get(function (req, res) {
    mensagemController.listar(function (mensagems, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(mensagems);
        }
    });
});

router.route('/:id').get(function (req, res) {
    mensagemController.getForId(req.params.id,function (mensagem, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(mensagem);
        }
    });
});

router.route('/').post(function (req, res) {
    mensagemController.insert(req.body, function (result, error) {
        if (error) {
            res.status(400);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

router.route('/:id').delete(function (req, res) {
    mensagemController.deleteById(req.params.id,function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

router.route('/:id').put(function (req, res) {
    mensagemController.update(req.params.id, req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});
module.exports = router;
