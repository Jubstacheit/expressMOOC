const express = require('express')
const router = express.Router()

module.exports = (params) => {

    const { catalogueController } = params;

    router.all('/', async(req, res) => {
        const discs = await catalogueController.getDiscs();
        res.render('layouts', {
            pageTitle: 'Bienvenue sur le catalogue',
            page: "catalogue",
            discs})
    })

    return router;
}