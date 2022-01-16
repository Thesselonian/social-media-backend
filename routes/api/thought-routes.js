const router = require('express').Router();

//import controller functions
const {
    createThought,
    getThoughts,
    getThought,
    updateThought
} = require('../../controllers/thought-controller');

// router routes
router
    .route('/')
    .get(getThoughts)
router
    .route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
router
    .route('/:userId').post(createThought);

module.exports = router;