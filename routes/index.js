const express = require('express');
const router = express.Router();

const catalogueRoute = require('./catalogue');
const aproposRoute = require('./apropos');

module.exports = () => {
    router.get('/', (req, res) => {
        res.render('pages/generic', {pageTitle: `Bienvenue sur la boîte à musique`})
    })

    router.use('/catalogue', catalogueRoute());
    router.use('/apropos', aproposRoute());

    return router;
}