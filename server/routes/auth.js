import express from 'express';
const router  = express.Router();
import {register} from '../controllers/register.js';
import {login} from "../controllers/login.js";

router.post('/register', register)

router.post('/login', login)
export default router;