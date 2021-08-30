import React, { useState } from "react";
import "./cartPage.css";
import ItemInCart from "../itemInCart/itemInCart";
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Button } from "@material-ui/core";

const CartPage = props => {
    const itemsFromStorage = JSON.parse(localStorage.getItem("cartItems")) || [],
        [cartItems, updateCartItems] = useState(itemsFromStorage),
        handleCheckoutButtonClick = (event) => {
            props.history.push("/checkout");
        }, itemRemoved = (event, itemToRemove) => {
            const currentCartItems = cartItems.filter(item => item.title !== itemToRemove);
            updateCartItems(currentCartItems);
            localStorage.setItem("cartItems", JSON.stringify(currentCartItems));
        }, numberOfItemsChange = (event, nameOfUpdatedItem) => {
            const currentCartItems = [...cartItems];
            const itemToUpdate = currentCartItems.find(item => item.title === nameOfUpdatedItem);
            itemToUpdate.count = event.target.value;
            updateCartItems(currentCartItems);
            localStorage.setItem("cartItems", JSON.stringify(currentCartItems));
        }, totalToPay = items => {
            return items.reduce((sum, item) => sum += parseFloat(item.price) * parseFloat(item.count), 0);
        }, numOfItems = items => {
            return items.reduce((sum, item) => sum += parseFloat(item.count), 0)
        };


    return <div className="cart-container">

        <div className="cart-information">
            <div className="cart-information-box">
                <h2>Subtotal for {numOfItems(cartItems)} items: ${totalToPay(cartItems).toLocaleString()} </h2>
                <Button variant="contained" color="primary" disableElevation onClick={handleCheckoutButtonClick} disabled={numOfItems(cartItems) <= 0}>
                    <MonetizationOnIcon /> Checkout
                </Button>
            </div>
        </div>

        <div className="cart-list-container">
            {cartItems.map((item, index) => {
                return <ItemInCart
                    name={item.title}
                    image={item.image}
                    price={item.price}
                    quantity={item.count}
                    onHandleQuantityChange={numberOfItemsChange}
                    onRemoveButtonClick={itemRemoved}
                />;
            })}
        </div>
    </div>;

}
export default CartPage;
