import React, { useState } from "react";
import "./chekoutPage.css";

const CheckoutPage = props => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [],
        [, setCardNumber] = useState(null),
        [, setCountry] = useState(null),
        [, setAddress] = useState(null),

        clickedPlaceOrder = async () => {
            localStorage.clear();
            props.history.push("/thankyou");
        }

    function calculateTotalCost(items) {
        return items.reduce((sum, item) => sum += parseFloat(item.price) * parseFloat(item.count), 0);
    };


    return (
        <div className='checkout-container'>
            <div className='payment-container checkout-card'>
                <h3>Payment Information</h3>
                <input type="text" id="card-number" placeholder="CREDIT CARD NUMBER"
                    onChange={event => setCardNumber(event.target.value)} />
            </div>

            <div className='shipping-address-container checkout-card'>
                <h3>Shipping Information</h3>

                <input type="text" id="shipping-country" placeholder="COUNTRY"
                    onChange={event => setCountry(event.target.value)} />
                <input type="text" id="shipping-address" placeholder="SHIPPING ADDRESS"
                    onChange={event => setAddress(event.target.value)} />
            </div>

            <div className="review-order-container checkout-card">
                <h3>Your order</h3>
                <table>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th># of Items</th>
                        <th>Total</th>
                    </tr>
                    {cartItems.map(item => {
                        return <tr>
                            <td>{item.title}</td>
                            <td>{item.price}</td>
                            <td>{item.count}</td>
                            <td>{(parseFloat(item.count) * parseFloat(item.price)).toLocaleString()}$</td>
                        </tr>
                    }
                    )}
                </table>
                <h1>{calculateTotalCost(cartItems).toLocaleString()}$</h1>

                <button type="button" className="comp-button" onClick={clickedPlaceOrder}>Complete My Order</button>

            </div>
        </div>

        
    
    );

};


export default CheckoutPage;