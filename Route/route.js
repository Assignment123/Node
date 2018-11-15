var express = require("express");
var router = express.Router();
var postcontroller= require("./../Controller/controller");

router.post('/post', postcontroller.funcpost);
router.get('/get', postcontroller.funcget);

module.exports = router;
