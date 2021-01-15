var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema({
    message: { type: String, required: false, unique: false }
});

/*
telSchema.pre('save', function(next) {
    var currentDate = new Date();
    this.created_at = currentDate;
    next();
});*/

var testSchema = mongoose.model('test-data', testSchema);

module.exports = testSchema;