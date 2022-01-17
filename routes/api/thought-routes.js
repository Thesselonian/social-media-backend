const router = require('express').Router();

//import controller functions
const {
    createThought,
    getThoughts,
    getThought,
    updateThought,
    deleteThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// router routes
router
    .route('/')
    .get(getThoughts)

//can't duplicate .post route using /:id parameter
router
    .route('/:thoughtId')
    .get(getThought)
    .put(updateThought)
    .delete(deleteThought)
router
    .route('/:userId')
    .post(createThought);

router
    .route('/:thoughtId/reaction')
    .post(addReaction)
router
    .route('/:thoughtId/reaction/:reactionId')
    .delete(deleteReaction)

module.exports = router;