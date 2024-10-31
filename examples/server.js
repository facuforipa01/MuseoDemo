const express = require('express');
const path = require('path');
const app = express();
const PORT = 3012;

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Ruta para la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
