var express = require("express");
var router = express.Router();
var responses= require("./../Promise/promise");


router.post('/create', responses.create_info);
router.get('/get', responses.findAll);
router.get('/get/:id', responses.findOne);
router.put('/:id/update', responses.update_info);
router.delete('/:id/delete', responses.delete_info);
router.patch('/patch/:id', responses.patch)

module.exports = router;
