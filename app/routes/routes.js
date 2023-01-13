const express = require('express');
const router = express.Router();
const API = require('../controllers/api.js');

router.get('/users', API.fetchAllUsers)
router.post('/user', API.fetchUser)
router.post('/newUser', API.createUser)

router.post('/getUserNV', API.fetchUser_NV)
router.patch('/user', API.updateUser)

router.get('/links', API.fetchAllLinks)
router.post('/link', API.postLink)
router.delete('/link', API.deleteLink)

router.get('/tasks', API.fetchAllTasks)
router.post('/task', API.postTask)
router.delete('/task', API.deleteTask)
router.patch('/task', API.updateTask)

router.get('/notifications', API.fetchAllNotifications)

module.exports = router;