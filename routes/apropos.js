const express = require('express');
const router = express.Router();

module.exports = () => {
    router.all('/', (req, res) => {
        res.render('layouts', {pageTitle: 'À propos de la boîte à musique', page: "apropos"})
    })

    return router;
}


