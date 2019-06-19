const express = require('express');

const app = express();

app.get('/', (req, res) => { //interceptando a rota raiz
    return res.send(`Hello ${req.query.name}`);//teste Hello World
});

app.listen(3333);//ouvir a porta

