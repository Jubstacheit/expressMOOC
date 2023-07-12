const express = require('express');
const router = express.Router();

const catalogueRoute = require('./catalogue');
const aproposRoute = require('./apropos');
const contactRoute = require('./contact');

module.exports = (params) => {
    router.get('/', (req, res) => {
        try{
            res.render('layouts', {
                pageTitle: `Bienvenue sur la boîte à musique`,
                page: "index"})
        } catch (err) {
            res.render('layouts', {
                pageTitle: `Une erreur s'est produite`,
                page: "erreur",
                err: err})
        }
    })

    router.use('/catalogue', catalogueRoute(params));
    router.use('/apropos', aproposRoute());
    router.use('/contact', contactRoute(params));

    router.use('/', (req, res) => {
        res.render('layouts', {
            pageTitle: "Cette page n'existe pas",
            err: false,
            page: "erreur"
            })
        }
    )

    return router;
}