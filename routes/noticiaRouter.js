/**
 * Created by jerem_000 on 02/07/2016.
 */
/**
 * Created by jerem_000 on 24/06/2016.
 */
var express = require('express');
var router = express.Router();

var NoticiaController = require('../controllers/noticiaController');
var noticiaController = new NoticiaController();

router.route('/').get(function (req, res) {
    noticiaController.listar(function (noticias, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(noticias);
        }
    });
});

router.route('/:id').get(function (req, res) {
    noticiaController.getForId(req.params.id,function (noticia, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(noticia);
        }
    });
});

router.route('/').post(function (req, res) {
    noticiaController.insert(req.body, function (result, error) {
        if (error) {
            res.status(400);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

router.route('/:id').delete(function (req, res) {
    noticiaController.deleteById(req.params.id,function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});

router.route('/:id').put(function (req, res) {
    noticiaController.update(req.params.id, req.body, function (result, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(result);
        }
    });
});
module.exports = router;