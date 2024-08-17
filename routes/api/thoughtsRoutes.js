const router = require('express').Router();
// Thoughts Controller
const { getThoughts, createThought, getSingleThought, updateThoughtById, deleteThoughtById,  } = require('../../controllers/thoughtsController');
// Reactions Controller
const { createReaction, removeReaction } = require('../../controllers/reactionsController');


router.route('/').get(getThoughts).post(createThought);
router.route('/:thoughtId').get(getSingleThought).put(updateThoughtById).delete(deleteThoughtById);

// For reactions
router.route('/:thoughtId/reactions').post(createReaction).delete(removeReaction);

module.exports = router;