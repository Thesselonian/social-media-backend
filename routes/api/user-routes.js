const router = require('express').Router();

//import controller functions
const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser,
    updateUser
} = require('../../controllers/user-controller');

// router routes
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/users/:id
router
    .route('/:userId')
    .get(getUserById)
    .delete(deleteUser)
    .put(updateUser)

module.exports = router