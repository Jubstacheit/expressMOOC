const express = require('express');
const path = require('path');
const port = 3000

const app = express();


app.use(express.static(path.join(__dirname, './phantom')));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));

app.get('/', (req, res) => {
    res.render('pages/generic', {pageTitle: `Bienvenue sur la boîte à musique`})
})

app.get('/catalogue', (req, res) => {
    res.render('pages/catalogue', {pageTitle: 'Bienvenue sur le catalogue'})
})

app.get('/apropos', (req, res) => {
    res.render('pages/generic', {pageTitle: 'À propos de la boîte à musique'})
})

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`)
})