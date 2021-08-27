//=====================================
//Product ROUTES
//=====================================
import express from 'express';
const router  = express.Router();
import { getAllProducts } from '../controllers/products.js';
import { addProduct } from "../controllers/products.js";

//INDEX page
router.get('/products', getAllProducts);

//Add product page
router.post('/products/new', addProduct);

export default router;