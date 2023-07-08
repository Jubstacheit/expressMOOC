const express = require('express')
const router = express.Router()

module.exports = (params) => {

    const { catalogueController } = params;

    router.all('/', async(req, res) => {
        const discs = await catalogueController.getDiscs();
        res.render('layouts', {
            pageTitle: 'Bienvenue sur le catalogue',
            discs,
            page: "catalogue"
        })
    })

    router.get(`/:id`, async(req, res) => {
        const disc = await catalogueController.getDisc(req.params.id);

        if(disc) {
            res.render('layouts', {
                pageTitle: `Détails de l'album`,
                disc,
                page: "catalogue-detail"
            })
        } else {
            res.render('layouts', {
                pageTitle: `Cet album n'est pas au catalogue`,
                page: "catalogue-nontrouve"
            })
        }
    })

    return router;
}