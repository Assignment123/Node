const mongoose = require('mongoose');

mongoose.connect('mongodb://sudrishya:sudrishya123@ds053128.mlab.com:53128/database_task');

const Schema = mongoose.Schema;

const Schema1 = new Schema({
    name: String,
    class : Number,
});

const Information = mongoose.model('Information', Schema1);
module.exports = Information;