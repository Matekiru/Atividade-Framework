const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Olá, esta é uma resposta em JSON do servidor!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});