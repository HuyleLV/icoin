var express = require('express');
var router = express.Router();
var controller = require('../Controller/user.controller');

router.post("/getUser",controller.getUser);
router.post("/getInforUser",controller.getInforUser);
router.post("/login",controller.login)
router.post("/register",controller.register);

router.post("/checkEmail",controller.checkEmail);
module.exports = router;