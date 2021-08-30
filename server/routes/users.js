import express from 'express';
const router  = express.Router();
import {users} from "../controllers/users.js";

router.get('/users', users)

export default router;