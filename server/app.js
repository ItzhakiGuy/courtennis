import express from 'express'
import mongoose from 'mongoose'
import products from './routes/products.js';
import auth from './routes/auth.js';
import users from './routes/users.js'
import cors from 'cors'
import session from 'express-session'

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json({extended: true}));
app.use(cors());
app.use(session({
    secret:'secret',
    saveUninitialized: false,
    resave: false
}));

//REQUIRING ROUTES
app.use(products);
app.use(auth);
app.use(users)


// Establishing DB connection
const CONNECTION_URL = "mongodb+srv://maor:Michael1995@cluster0.lwknm.mongodb.net/courtennis?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to Courtennis DB!'))
.catch(error => console.log(error.message));

mongoose.set('useFindAndModify', false)

// Server starts listening on port
const port = 9000;
app.listen((port || process.env.PORT), () => {
    console.log(`Courtennis server is listening at http://localhost:${port}`)
})