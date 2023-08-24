const express = require('express');

const routes = require('./routes')

const app = express();

//middlewares
app.use(express.json());

app.use('/checklist', routes)


app.listen(3000, () => {
    console.log('Servidor foi iniciado');
})