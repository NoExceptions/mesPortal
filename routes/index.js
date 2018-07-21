var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/index_controller')
var users_controller = require('../controllers/users_controller')

router.get('/cadastro', users_controller.new_user);
router.post('/cadastro',users_controller.save_user);
router.get('/', index_controller.new_index);

module.exports = router;
