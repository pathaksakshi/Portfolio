const express = require('express');
const { getProjects, createProject } = require('../controllers/projectController');
const { getBlogs, createBlog } = require('../controllers/blogController');
const router = express.Router();

// Project Routes
router.get('/projects', getProjects);
router.post('/projects', createProject);

// Blog Routes
router.get('/blogs', getBlogs);
router.post('/blogs', createBlog);

module.exports = router;

