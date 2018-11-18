const mongoose = require('mongoose');

mongoose.connect('mongodb://sudrishya:sudrishya123@ds053128.mlab.com:53128/database_task');

const Schema = mongoose.Schema;

const Schema1 = new Schema({
    name: {type: String, required: true, max: 30},
    class: {type: Number, required: true},
    date: {type: Date,default: Date.now()},
    deleted:{type: Boolean, default:false }
});

const Information = mongoose.model('Information', Schema1);
module.exports = Information;

