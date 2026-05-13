const express = require('express');

const helloRoute = express.Router();

helloRoute.get('/hello', (req, res)=> {
    res.send('peter says hello');
});


module.exports = helloRoute;