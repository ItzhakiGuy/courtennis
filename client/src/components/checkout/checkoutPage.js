import React, { useState } from "react";
import "./chekoutPage.css";
import { Box } from '@material-ui/core/';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button } from '@material-ui/core/';


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
        <Box component="div" display="block" className='checkout-container'>
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
                <Table>
                    <TableHead>
                    <TableRow>
                        <TableCell>Item</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell># of Items</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {cartItems.map(item => {
                        return <TableRow>
                            <TableCell>{item.title}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.count}</TableCell>
                            <TableCell>{(parseFloat(item.count) * parseFloat(item.price)).toLocaleString()}$</TableCell>
                        </TableRow>
                    }
                    )}
                    </TableBody>
                </Table>
                <h1>{calculateTotalCost(cartItems).toLocaleString()}$</h1>

                <Button variant="contained" type="button" className="finish-button" onClick={clickedPlaceOrder}>Complete My Order</Button>

            </div>
        </Box>

        
    
    );

};


export default CheckoutPage;