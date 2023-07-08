const express = require('express')
const router = express.Router()

module.exports = () => {
    router.get('/', (req, res) => {
        res.render('layouts', {pageTitle: 'Bienvenue sur le catalogue', page: "catalogue"})
    })

    return router;
}