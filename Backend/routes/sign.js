const express = require('express')
const userRouter = express.Router();

const {viewUser, login, addUser} = require('../controller/signup');

userRouter.post('/adduser', addUser)
userRouter.get('/viewuser', viewUser)
userRouter.post('/login', login)


module.exports = userRouter;