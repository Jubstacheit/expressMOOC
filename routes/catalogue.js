const express = require('express')
const router = express.Router()

module.exports = () => {
    router.get('/', (req, res) => {
        res.render('pages/catalogue', {pageTitle: 'Bienvenue sur le catalogue'})
    })

    return router;
}