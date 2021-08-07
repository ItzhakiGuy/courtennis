//=====================================
//Tennis ROUTES
//=====================================
const express = require("express");
const router  = express.Router();
//const Restaurant = require("../models/restaurant");
//const Comment = require("../models/comment");
//const middleware = require("../middleware/index.js");

//INDEX page
router.get('/tennis',function(req,res) {
    res.send("working");
})

module.exports = router;
