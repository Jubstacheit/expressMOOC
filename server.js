const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');

const port = 3000

const router = require('./routes');
const CatalogueController = require('./controllers/CatalogueController');
const catalogueController = new CatalogueController("catalog");
const ContactController = require("./controllers/ContactController");
const contactController = new ContactController("contact");

const app = express();


app.use(express.static(path.join(__dirname, '/phantom')));
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));

fs.readFile(path.join(__dirname, './data/config.json'), 'utf8', (err, data) => {
    if (err) {
        console.error("Erreur de lecture du fichier de configuration", err);
        app.locals.siteName = '[nom du site]';
        app.locals.socials = [{url: "#", class: "", label: ""}];
        app.locals.liens = [{url: "/", class: "", label: "Accueil"}];
    } else {
        app.locals.siteName = JSON.parse(data).name;
        app.locals.socials = JSON.parse(data).socials;
        app.locals.liens = JSON.parse(data).liens;
    }
});

app.use((req, res, next) => {
    console.log(`Time : ${Date.now()}, ${req.method} ${req.url}`)
    next();
})
app.use('/', router({
    catalogueController,
    contactController
}));

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`)
})