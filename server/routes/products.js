//=====================================
//Product ROUTES
//=====================================
import express from 'express';
import { getAllProducts } from '../controllers/products.js';
import { addProduct } from "../controllers/products.js";

const router  = express.Router();

//INDEX page
router.get('/products', getAllProducts);

//Add product page
router.post('/products/new', addProduct);

export default router;