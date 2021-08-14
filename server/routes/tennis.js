//=====================================
//Tennis ROUTES
//=====================================
// const express = require("express");
// const router  = express.Router();
//const Restaurant = require("../models/restaurant");
//const Comment = require("../models/comment");
//const middleware = require("../middleware/index.js");

import express from 'express';
const router  = express.Router();
import { getTennis } from '../controllers/tennis.js';
import middlewareObj from '../middleware/index.js';

//INDEX page
router.get('/tennis',middlewareObj.isLoggedIn, getTennis);

export default router;