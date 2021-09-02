import React from 'react';
import Product from "../product/product"
import './browse.css';
  
class ProductContainer extends React.Component {
    render() {
        const { products, cart, remove, cartItems } = this.props;
        return (
            <div className={"product-container-flex"}>
                {products.map((product, _) => (
                    <Product addToCart={cart} removeFromCart={remove} products={product}
                             cartItems={cartItems} />
                ))}
            </div>
        );
    }
}

export default ProductContainer;
