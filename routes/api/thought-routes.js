const router = require('express').Router();
const {
    getAllThought,
    getThoughtById,
    createThought,
    updateThought, 
    deleteThought,
    addReaction,
    updateReaction
} = require('../../controllers/thought-controller');

// Set up GET all and POST at /api/thoughts
router
.route('/')
.get(getAllThought)
.post(createThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:_id
router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(deleteThought);

router
.route('/:id/reactions')
.post(addReaction);

router
.route('/:id/reactions/:reactionId')
.delete(updateReaction);

module.exports = router;