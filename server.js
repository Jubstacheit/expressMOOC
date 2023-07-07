const express = require('express');
const path = require('path');
const port = 3000
const router = require('./routes');

const app = express();


app.use(express.static(path.join(__dirname, './phantom')));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));

app.use((req, res, next) => {
    console.log(`Time : ${Date.now()}, ${req.method} ${req.url}`)
    next();
})
app.use('/', router());

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`)
})