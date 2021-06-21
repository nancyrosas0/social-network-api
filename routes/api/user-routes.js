const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser, 
    deleteUser,
    addFriend, 
    updateFriend
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
.route('/')
.get(getAllUser)
.post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:_id
router
.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// set up POST and DELETE friend to and off a user's friend list
router
.route('/:id/friends/:friendId')
.post(addFriend)
.delete(updateFriend)

module.exports = router;