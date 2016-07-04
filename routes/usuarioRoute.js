/**
 * Created by jerem_000 on 24/06/2016.
 */
var express = require('express');
var router = express.Router();

var UsuarioController = require('../controllers/usuarioController');
var usuarioController = new UsuarioController();

router.route('/').get(function (req, res) {
    usuarioController.listar(function (users, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(users);
        }
    });
});

router.route('/:id').get(function (req, res) {
    usuarioController.getForId(req.params.id,function (usuario, error) {
        if (error) {
            res.status(404);
            res.send(error);
        } else {
            res.json(usuario);
        }
    });
});

router.route('/').post(function (req, res) {
   usuarioController.inserir(req.body, function (user, error) {
        if (error) {
            res.status(400);
            res.send(error);
        } else {
            res.json(user);
        }
    });
});

router.route('/login').post(function (req, res) {
    usuarioController.login(req.body, function (user, error) {
        if (error) {
            res.status(401);
            res.send(error);
        } else {
            /*var token = jwt.sign(user, global.getSuperSecret, {
                expiresIn: '1h'
            });

            res.json({
                user: user,
                token: token
            });*/
            res.json(user);
        }
    });
});
module.exports = router;