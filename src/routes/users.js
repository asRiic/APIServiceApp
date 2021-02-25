const { Router } = require('express');
const router = Router();

const { getUsers, postUsers, getUser, deleteUsers, putUsers } = require('../controllers/user.controller');


router.route('/')

    .get(getUsers)
    .post(postUsers)


router.route('/:id')

    .get(getUser)
    .put(putUsers)
    .delete(deleteUsers)
 
    
module.exports = router; 