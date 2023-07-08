const express = require('express');
const { check, validationResult } = require('express-validator');

const router = express.Router();


module.exports = (params) => {
    const { contactController } = params;

    router.post('/', [
        check('name').trim().isLength({ min: 3 }).escape().withMessage('Le nom doit contenir au moins 3 caractères'),
        check('email').trim().isEmail().normalizeEmail().withMessage(`L'adresse email n'est pas valide`),
        check('message').trim().isLength({ min: 5 }).escape().withMessage('Le message doit contenir au moins 5 caractères')
    ], async (req, res, next) => {

        const erreurs = validationResult(req);
        let messages = {};
        if(!erreurs.isEmpty()) {
            messages = { erreurs: erreurs.array()};
        }else{
            const {name, email, message } = req.body;
            await contactController.addEntry(name, email, message);
        }

        res.render('layouts', {
            pageTitle: 'Votre demande de contact',
            page: "contact",
            messages: messages.erreurs,
            contact: req.body
        })
    })

    return router;
}