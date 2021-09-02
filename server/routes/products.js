//=====================================
//Product ROUTES
//=====================================
import express from 'express';
import { getAllProducts } from '../controllers/products.js';
import { addProduct } from "../controllers/products.js";

const router  = express.Router();

router.get('/products', getAllProducts);

//This route is for internal use, and is not showed in the website UI!!
router.post('/products/new', addProduct);

export default router;