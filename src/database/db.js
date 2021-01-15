/**
 * @name db.js
 * @description 
 */

const mongoose = require('mongoose');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
mongoose.connect("mongodb://localhost:27017/stateofpbbg2021", 
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

const testModel = require('./models/test.js');

module.exports = {
    getTest: async function() {
        //const db = mongoose.connection;
        return testModel.findOne({}).exec();
    }
}