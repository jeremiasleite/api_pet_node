/**
 * Created by jerem_000 on 02/07/2016.
 */
var express = require('express');
var router = express.Router();

var InscricaoController = require('../controllers/inscricaoController');
var inscricaoController = new InscricaoController();

router.route('/').get(function (req, res) {
    inscricaoController.listar(function (inscricaos, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(inscricaos);
        }
    });
});

router.route('/:id').get(function (req, res) {
    inscricaoController.getForId(req.params.id,function (inscricao, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(inscricao);
        }
    });
});

router.route('/').post(function (req, res) {
    inscricaoController.insert(req.body, function (result, error) {
        if (error) {
            res.status(400);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

router.route('/:id').delete(function (req, res) {
    inscricaoController.deleteById(req.params.id,function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

router.route('/:id').put(function (req, res) {
    inscricaoController.update(req.params.id, req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});
module.exports = router;