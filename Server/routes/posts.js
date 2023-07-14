const express = require('express');
const router = express.Router();
const {check,validationResult } = require('express-validator');

const auth = require('../middleware/auth');
const postModel = require('../models/posts');
const userModel =require('../models/user');

module.exports = router; 
