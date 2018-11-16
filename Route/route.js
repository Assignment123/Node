var express = require("express");
var router = express.Router();
var postcontroller= require("./../Controller/controller");


router.post('/create', postcontroller.create_info);
router.get('/get', postcontroller.retrieve_info);
router.get('/get/:id', postcontroller.retrieve_single);
router.put('/:id/update', postcontroller.update_info);
router.delete('/:id/delete', postcontroller.delete_info);

module.exports = router;
