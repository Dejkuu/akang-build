const express = require('express');
const router = express.Router();
const API = require('../controllers/api.js');

router.get('/api/users', API.fetchAllUsers)
router.post('/api/user', API.fetchUser)
router.post('/api/newUser', API.createUser)

router.post('/api/getUserNV', API.fetchUser_NV)
router.patch('/api/user', API.updateUser)

router.get('/api/links', API.fetchAllLinks)
router.post('/api/link', API.postLink)
router.delete('/api/link', API.deleteLink)

router.get('/api/tasks', API.fetchAllTasks)
router.post('/api/task', API.postTask)
router.delete('/api/task', API.deleteTask)
router.patch('/api/task', API.updateTask)

router.get('/api/notifications', API.fetchAllNotifications)

module.exports = router;