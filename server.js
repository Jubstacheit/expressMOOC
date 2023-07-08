const express = require('express');
const path = require('path');
const port = 3000
const router = require('./routes');

const app = express();


app.use(express.static(path.join(__dirname, './phantom')));

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, './views'));

app.locals.siteName = 'Boîte à musique';
app.locals.socials = [
    {url: "https://www.twitter.com", class: "fa-twitter", label: "Twitter"},
    {url: "https://www.facebook.com", class: "fa-facebook-f", label: "Facebook"},
    {url: "https://www.instagram.com", class: "fa-instagram", label: "Instagram"},
    {url: "https://www.github.com", class: "fa-github", label: "Github"},
];

app.use((req, res, next) => {
    console.log(`Time : ${Date.now()}, ${req.method} ${req.url}`)
    next();
})
app.use('/', router());

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`)
})