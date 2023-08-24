const express =require('express');
const router=express.Router();
const postController = require('../controllers/post_controller');

router.get('/post',postController.postcontroller);

module.exports=router;