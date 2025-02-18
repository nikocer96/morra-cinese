const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve i file statici nella cartella "public"
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});
