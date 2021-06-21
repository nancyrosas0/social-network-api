const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');
const { User, Thought } = require('../../models')

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);
router.use('/friends', userRoutes);
router.use('/reactions', thoughtRoutes);

module.exports = router;