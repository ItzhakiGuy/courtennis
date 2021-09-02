import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
    try{
        await Product.find({}, (err, products) => {
            if(err){
                console.log(err)
            }
            else{
                res.send(products.filter(product => product.name !== "testProduct"));
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}


export const addProduct = async (req, res) => {
    const newProduct = new Product({ name: req.body.name, price: req.body.price, image: req.body.image });
    try{
        await Product.create(newProduct, (err) => {
            if(err){
                res.json({success: false, message: `${err}`});
            }
            else{
                res.json({status: '200', success: true, message: `The new product was created successfully!!`});
            }
        });
    }
    catch (err) {
        res.json({success: false, message: `${err}`});
    }
}

