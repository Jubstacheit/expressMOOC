const express = require('express');
const router = express.Router();

module.exports = (params) => {
    const { contactController } = params;

    router.post('/', (req, res) => {


        res.render('layouts', {
            pageTitle: 'Votre demande de contact',
            page: "contact",
            contact: req.body
        })
    })

    return router;
}


