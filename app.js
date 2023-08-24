//incluir a biblioteca do express
const express = require('express');

//criação de uma constante onde ficará o express
//poderá atribuir todos os métodos inclusos em express
const app = express();

//middlewares
//app.use(express.json());

//const log = (req, res, next) => {
//    console.log(req.body);
//    console.log(`Data: ${Date.now()}`);
//    next();
//}

//app.use(log);

//criação da rota
// '/' chamada do root, req é a requisição, res é a resposta
// => função de resposta para retornar uma mensagem em html
app.get('/', (req, res) => {
    res.send('<h1>Minha lista de tarefas :) </h1>');
})

//nova rota
// '/json' caminho
// resposta em json com titulo e se foi concluída
app.get('/json', (req, res) =>{
    console.log(req.body);
    res.json({nome: 'Tarefa X', done: true});
})

//inicializando o servidor na porta 3000
//mensagem de servidor ativo
app.listen(3000, () => {
    console.log('Servidor foi iniciado');
})