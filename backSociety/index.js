import express from 'express';

const app = express();

app.get('/:p1', function (req, res) {
    console.log(`funcionando .. server: ${req.params.p1}`)
})

app.listen('3005', function (req, res) {
    console.log('ok, rodando')
})


