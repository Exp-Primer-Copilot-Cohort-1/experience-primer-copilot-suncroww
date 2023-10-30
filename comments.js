// Create web server
var express = require('express');
var router = express.Router();

// Require controller modules
var commentsController = require('../controllers/commentsController');

// GET request for creating a Comment. NOTE This must come before routes that display Comment (uses id).
router.get('/comment/create', commentsController.comment_create_get);

// POST request for creating Comment.
router.post('/comment/create', commentsController.comment_create_post);

// GET request to delete Comment.
router.get('/comment/:id/delete', commentsController.comment_delete_get);

// POST request to delete Comment.
router.post('/comment/:id/delete', commentsController.comment_delete_post);

// GET request to update Comment.
router.get('/comment/:id/update', commentsController.comment_update_get);

// POST request to update Comment.
router.post('/comment/:id/update', commentsController.comment_update_post);

// GET request for one Comment.
router.get('/comment/:id', commentsController.comment_detail);

// GET request for list of all Comment items.
router.get('/comments', commentsController.comment_list);

module.exports = router;