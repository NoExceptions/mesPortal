var express = require('express');
var router = express.Router();
var users_controller = require('../controllers/users_controller')
/* GET home page. */
router.get('/cadastro', users_controller.new_user);

module.exports = router;
