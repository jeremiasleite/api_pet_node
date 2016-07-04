/**
 * Created by jerem_000 on 02/07/2016.
 */
/**
 * Created by jerem_000 on 02/07/2016.
 */
/**
 * Created by jerem_000 on 24/06/2016.
 */
var express = require('express');
var router = express.Router();

var AtividadeController = require('../controllers/atividadeController');
var atividadeController = new AtividadeController();

router.route('/').get(function (req, res) {
    atividadeController.listar(function (atividades, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(atividades);
        }
    });
});

router.route('/:id').get(function (req, res) {
    atividadeController.getForId(req.params.id,function (atividade, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(atividade);
        }
    });
});

router.route('/').post(function (req, res) {
    atividadeController.insert(req.body, function (result, error) {
        if (error) {
            res.status(400);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

router.route('/:id').delete(function (req, res) {
    atividadeController.deleteById(req.params.id,function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

router.route('/:id').put(function (req, res) {
    atividadeController.update(req.params.id, req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});
module.exports = router;
