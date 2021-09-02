import React  from "react";
import "./cartProduct.css";
import { Button } from "@material-ui/core";

const CartProduct = props => {

    return (
        <div className="cart-item-container">
            <div className="cart-item-image-container">
                <img className="car-item-img"
                     src={props.image}
                     alt="cart"/>
            </div>
            <div className="cart-item-details-container">
                <h1 className="item-name">{props.name}</h1>
                <h3>Price: {props.price}$</h3>
                <div className="quantity-container">
                    <h3>Quantity: </h3>
                    <input type="number" id="quantity" key={props.name} className="amount-input"
                        min="1" max="50" defaultValue={props.quantity} onKeyDown={(event) => event.preventDefault()}
                        onChange={event => props.onHandleQuantityChange(event, props.name)} />
                </div>
                <Button variant="contained" className={"remove-from-cart-button"} onClick={event => props.onRemoveButtonClick(event, props.name)}>Remove from Cart</Button>
            </div>

        </div>
    );

}

export default CartProduct;
