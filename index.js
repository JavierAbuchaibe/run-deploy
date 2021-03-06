const express = require('express');
const app = express();

app.use(express.json());
app.disable('x-powered-by');

app.get('/', (req, res) => {
    res.send(`Hola Mundo`);
    console.log('Hello world received a request.');    
});

app.get('/isi', async (req, res) => {
    res.status(200).send({
      status: true,
      mensaje: `===> Ingeniería de software!`
    });  
    console.log('Hola desde TADS endpoint activate');      
});

module.exports = app