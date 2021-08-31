import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import tennis from './routes/products.js';
import auth from './routes/auth.js';
import users from './routes/users.js'
import flash from 'connect-flash';
import session from 'express-session'

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use(cors());
app.use(session({
    secret:'Michael1995',
    saveUninitialized: false,
    resave: false
}));
app.use(flash());
app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})
app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

const CONNECTION_URL = "mongodb+srv://maor:Michael1995@cluster0.lwknm.mongodb.net/courtennis?retryWrites=true&w=majority";

//REQUIRING ROUTES
app.use(tennis);
app.use(auth);
app.use(users)

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to Courtennis DB!'))
.catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false)

const port = 9000;
app.listen((port || process.env.PORT), () => {
    console.log(`Courtennis listening at http://localhost:${port}`)
})