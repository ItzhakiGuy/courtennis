import React, { Component } from "react";
import "./item.css";

export default class Item extends Component {

    constructor(props) {
        super(props);
        this.state = { itemInCart: 0, cartItems: this.props.cartItems };
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.cartItems.length) {
            this.setState({ itemInCart: 0 });
        }
    }

    addToCart(item) {
        this.props.addToCart(item);
        this.setState({ itemInCart: this.state.itemInCart + 1 });
    }

    render() {
        let item = this.props.products;
        return (
            <div className="product">

                <div className="product-image-container">
                    <a href={"#" + item._id}>
                        <img src={process.env.PUBLIC_URL + item.image} alt={item.title} />
                    </a>
                </div>

                <div className="product-price">
                    <div className="product-title">
                        <p>
                            {item.title}
                        </p>
                    </div>
                    <div className="info">
                        <h6 className="price">{item.price + "$"}</h6>
                        <h6 className="info-cart">{"Quantity:" + this.state.itemInCart}</h6>
                    </div>
                    <div className="button-container">
                        <button id="add-button" onClick={() => this.addToCart(item)}>Add to Cart</button>
                    </div>
                </div>

            </div>);
    }
};

