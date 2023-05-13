const { Router } = require("express");
const {
    randonNumberController, generateProfileController
} = require('./controller');

const router = new Router();

router.get('/random-number', randonNumberController);
router.get('/profile', generateProfileController);

module.exports = router;