const express = require('express');
const router = express.Router();

const catalogueRoute = require('./catalogue');
const aproposRoute = require('./apropos');

module.exports = (params) => {
    router.get('/', (req, res) => {
        res.render('layouts', {pageTitle: `Bienvenue sur la boîte à musique`, page: "index"})
    })

    router.use('/catalogue', catalogueRoute(params));
    router.use('/apropos', aproposRoute());

    return router;
}