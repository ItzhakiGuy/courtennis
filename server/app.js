// const express =      require('express');
// const app =          express();
// // const bodyParser =   require("body-parser"); // Deprecated
// const mongoose =     require("mongoose");
// const cors =         require("cors");
// const tennis =       require("./routes/tennis.js");


// const commentsRoutes =        require("./routes/comments");
// const authRoutes =            require("./routes/auth");

// ES6 Support
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import tennis from "./routes/tennis.js";

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use(cors());


// Check if port is legit?
const port =         3000;
const CONNECTION_URL = "mongodb+srv://maor:Michael1995@courtennis.vptz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// think this is better
// const port = process.env.PORT || 5000;

//REQUIRING ROUTES
app.use('/tennis', tennis);

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