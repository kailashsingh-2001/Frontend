const express = require("express");
const Controllers= require('../controllers/user') 
const router = express.Router();

router.post('/register',Controllers.Signup);
