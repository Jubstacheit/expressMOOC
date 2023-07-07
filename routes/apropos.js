const express = require('express');
const router = express.Router();

module.exports = () => {
    router.get('/', (req, res) => {
        res.render('pages/generic', {pageTitle: 'À propos de la boîte à musique'})
    })

    return router;
}


