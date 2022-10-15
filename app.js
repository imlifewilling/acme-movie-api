const express = require('express');
const app = express();
const {models} = require('./db');

app.get('/', (req,res,next)=> {
    res.send(`HELLO`);
});

app.get('/api/movies', (req,res,next)=>{
    models.Movie.findAll()
        .then(movie => res.send(movie))
        .catch(next)
});

app.get('/api/actors', (req,res,next)=>{
    models.Actor.findAll()
        .then(actor => res.send(actor))
        .catch(next)
});

module.exports = app;