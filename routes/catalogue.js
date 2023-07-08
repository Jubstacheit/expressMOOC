const express = require('express')
const router = express.Router()

module.exports = (params) => {

    const { catalogueController } = params;

    router.all('/', (req, res) => {
        const message = catalogueController.getData();
        res.render('layouts', {pageTitle: 'Bienvenue sur le catalogue', page: "catalogue", message})
    })

    return router;
}