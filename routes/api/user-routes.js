const router = require('express').Router();

//import controller functions
const {
    getAllUsers,
    getUserById,
    createUser,
    deleteUser
} = require('../../controllers/user-controller');

// router routes
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .delete(deleteUser)

module.exports = router