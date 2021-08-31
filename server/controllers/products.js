import Product from "../models/product.js";

export const getAllProducts = async (req, res) => {
    try{
        await Product.find({}, (err, products) => {
            if(err){
                console.log(err)
            }
            else{
                res.send(products);
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
        await Product.create(newProduct, (err, product) => {
            if(err){
                console.log(err)
            }
            else{
                res.send(product.name + " was created successfully")
            }
        });
    }
    catch (err) {
        console.log(err);
    }
}

