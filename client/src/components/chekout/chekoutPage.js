import React, { useState } from "react";
import "./chekoutPage.css";
import axios from "axios";
import authenticationService from "../services/AuthenticationService.js";

const ChekoutPage = props => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [],
        [country, setCountry] = useState(null),
        [city, setCity] = useState(null),
        [address, setAddress] = useState(null),
        [cardHolder, setCardHolder] = useState(null),
        [cardNumber, setCardNumber] = useState(null),
        [expireDate, setExpireDate] = useState(null),
        [CVV, setCVV] = useState(null),

        clickedPlaceOrder = async (event) => {
            const response = await sendPurchaseRequest();
            if (response.success === true) {
                clearCart();
                props.history.push({
                    pathname: "/goodbye",
                    orderId: response.orderId
                });
            } else {
                alert(response.message);
            }
        }, clearCart = async () => {
            localStorage.clear();
        }, isFormValid = () => {
            return (
                country &&
                city &&
                address &&
                cardHolder &&
                cardNumber &&
                expireDate &&
                CVV &&
                cartItems)
        }, sendPurchaseRequest = async () => {
            let purchaseResponse;
            let price = calculateTotalCost(cartItems).toLocaleString();

            console.log(authenticationService.getEmail());
            const email = authenticationService.getEmail();

            const body = {
                country, city, address, cardHolder, cardNumber, CVV, expireDate, price, email,
                purchases: cartItems
            };

            purchaseResponse = await axios.post("/purchase", body)
                .then(response => response.data)
                .catch((error) => {
                    if (error.response && error.response.data) {
                        return error.response.data;
                    } else {
                        return {
                            "success": false,
                            "message": "Could not reach server!",
                        }
                    }
                });

            return purchaseResponse;
        }, calculateTotalCost = items => {
            return items.reduce((sum, item) => sum += parseFloat(item.price) * parseFloat(item.count), 0);
        };


    return (
        <div className='checkout-container'>


            <div className='payment-container checkout-card'>
                <h3>Payment Information</h3>
                <input type="text" id="cardholder-name" placeholder="NAME ON CARD"
                    onChange={event => setCardHolder(event.target.value)} />
                <input type="text" id="card-number" placeholder="CREDIT CARD NUMBER"
                    onChange={event => setCardNumber(event.target.value)} />
                <input type="text" id="cvv" placeholder="CVV" onChange={event => setCVV(event.target.value)} />
                <input type="date" onChange={event => setExpireDate(event.target.value)} />
            </div>

            <div className='shipping-address-container checkout-card'>
                <h3>Shipping Information</h3>

                <input type="text" id="shipping-country" placeholder="COUNTRY"
                    onChange={event => setCountry(event.target.value)} />
                <input type="text" id="shipping-city" placeholder="CITY"
                    onChange={event => setCity(event.target.value)} />
                <input type="text" id="shipping-address" placeholder="SHIPPING ADDRESS"
                    onChange={event => setAddress(event.target.value)} />
            </div>

            <div className="review-order-container checkout-card">
                <h3>Review your order</h3>
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

export default ChekoutPage;