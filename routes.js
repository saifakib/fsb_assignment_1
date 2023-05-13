const { Router } = require("express");
const {
    randonNumberController
} = require('./controller');

const router = new Router();

router.get('/random-number', randonNumberController);

module.exports = router;