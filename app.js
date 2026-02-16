const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/convertir', (req, res) => {
    const { pesos } = req.body;
    const tasaCambio = 17.10; // 1 dólar = 17.10 pesos
    const dolares = (pesos / tasaCambio).toFixed(2);
    res.json({ dolares });
});

app.listen(3001, () => {
    const url = 'http://localhost:3001';
    console.log('Servidor corriendo en ' + url);

    abrirNavegador(url);
});

//funcion para abrir el navegador
async function abrirNavegador(url) {
//Importa el paquete open dinamicamente para usar unicamente la funcion principal
//Ya que open no funciona con require, porque ahora es ESM-only (modulos modernos)
    const open = (await import('open')).default;
    
    //Ejecuta el paquete open 
    await open(url);
}
