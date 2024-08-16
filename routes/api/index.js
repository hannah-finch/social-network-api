const router = require('express').Router();
const friendsRoutes = require('./friendsRoutes');
const reactionsRoutes = require('./reactionsRoutes');
const thoughtsRoutes = require('./thoughtsRoutes');
const usersRoutes = require('./usersRoutes');

router.use('/friends', friendsRoutes);
router.use('/reactions', reactionsRoutes);
router.use('/thoughts', thoughtsRoutes);
router.use('/users', usersRoutes);

module.exports = router;