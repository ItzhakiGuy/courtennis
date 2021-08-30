import React from 'react';
import Item from "../item/item"
import './browse.css';
  
class ProductContainer extends React.Component {
    render() {
        const { products, cart, remove, cartItems } = this.props;
        return (
            <div className={"product-container-flex"}>
                {products.map((product, i) => (
                    <Item addToCart={cart} removeFromCart={remove} products={product}
                        cartItems={cartItems} />
                ))}
            </div>
        );
    }
}

export default ProductContainer;
