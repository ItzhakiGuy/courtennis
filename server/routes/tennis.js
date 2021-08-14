//=====================================
//Tennis ROUTES
//=====================================
// const express = require("express");
// const router  = express.Router();
//const Restaurant = require("../models/restaurant");
//const Comment = require("../models/comment");
//const middleware = require("../middleware/index.js");

// Guy Changes
import express from 'express';
import { getTennis } from '../controllers/tennis.js';
const router  = express.Router();

//INDEX page
router.get('/tennis',getTennis);

// module.exports = router;
export default router;