const express   = require('express');
const mongoose  = require('mongoose');

const Model     = require('./model');

const app = express();

mongoose.connect('mongodb://localhost:27017/learnjs', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/people', async(req, res) => {
    const list = await Model.find({});
    res.json({list});
});

app.listen(3002, () => {
    console.log("Person Service has been started at: http://localhost:3002");
})