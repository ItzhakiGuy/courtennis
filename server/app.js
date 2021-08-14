import express from 'express'
import mongoose from 'mongoose'
import passport from 'passport'
import cors from 'cors'
import tennis from './routes/tennis.js';
import auth from './routes/auth.js';
import User from './models/user.js';
import localStrategy from 'passport-local';
import passportLocalMongoose from 'passport-local-mongoose';
import flash from 'connect-flash';
import session from 'express-session'

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use(cors());
app.use(passport.initialize());
app.use(passport.session());
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

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const CONNECTION_URL = "mongodb+srv://maor:Michael1995@courtennis.vptz3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

//REQUIRING ROUTES
app.use(tennis);
app.use(auth);

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

const port = 9000;
app.listen((port || process.env.PORT), () => {
    console.log(`Example app listening at http://localhost:${port}`)
})