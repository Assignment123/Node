const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Schema1 = new Schema({
    name: String,
    class : Number,
    address : String
});

const Information = mongoose.model('Information',Schema1);

module.exports = Information;
