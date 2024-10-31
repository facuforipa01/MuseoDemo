const express = require('express');
const https = require('https');
const fs = require('fs');

const app = express();
const PORT = 3012;

// Cargar los certificados SSL
const options = {
    key: fs.readFileSync('./private.key'), // Reemplaza con la ruta a tu archivo de clave privada
    cert: fs.readFileSync('./certificate.crt')   // Reemplaza con la ruta a tu certificado
};

// Iniciar el servidor HTTPS
https.createServer(options, app).listen(PORT, () => {
    console.log(`Servidor escuchando en https://149.50.131.9:${PORT}`);
});
