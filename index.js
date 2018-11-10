const express = require('express');

const ronaldinho = express();

async function xuxu() {
    ronaldinho.get('/personagens', async (pedido, resposta) => {
        resposta.send([
            {
                nome: 'Tyrion Lannister',
                casa: 'Lannister',
            },
            {
                nome: 'Jon Snow',
                casa: 'Stark',
            },
            {
                nome: 'Arya Stark',
                casa: 'Stark',
            }
        ]);
    });

    ronaldinho.listen(8080, () => console.log('Garçom escutando...'));
}

xuxu();