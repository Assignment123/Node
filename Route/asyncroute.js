var express = require("express");
var router = express.Router();
var postcontroller= require("./../Async/async");

router.post('/create', postcontroller.create_info);
router.get('/get', postcontroller.findAll);
router.get('/get/:id', postcontroller.findOne);
router.put('/:id/update', postcontroller.update_info);
router.delete('/:id/delete', postcontroller.delete_info);

module.exports = router;
