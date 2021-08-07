const express =      require('express');
const app =          express();
const bodyParser =   require("body-parser");
const mongoose =     require("mongoose");
const cors =         require("cors");
const tennis =       require("./routes/tennis.js");
// const commentsRoutes =        require("./routes/comments");
// const authRoutes =            require("./routes/auth");

/*
    import express from 'express'
    import bodyParser from 'body-parser'
    import mongoose from 'mongoose'
    import cors from 'cors'
*/
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

const port =         3000;
const CONNECTION_URL = "mongodb+srv://maor:Michael1995@courtennis.vptz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//REQUIRING ROUTES
app.use(tennis);

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.use(commentsRoutes);
// app.use(authRoutes);
app.listen((process.env.PORT || port), () => {
    console.log(`Example app listening at http://localhost:${port}`)
})