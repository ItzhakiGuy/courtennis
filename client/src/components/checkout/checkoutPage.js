import React, { useState } from "react";
import "./chekoutPage.css";
import { Box } from '@material-ui/core/';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Button, TextField  } from '@material-ui/core/';
import AccountBalanceTwoToneIcon from '@material-ui/icons/AccountBalanceTwoTone';
import ListAltTwoToneIcon from '@material-ui/icons/ListAltTwoTone';
import LocalShippingTwoToneIcon from '@material-ui/icons/LocalShippingTwoTone';

const CheckoutPage = props => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [],
        [, setName] = useState(null),
        [, setAddress] = useState(null),
        [, setCardNumber] = useState(null),
        [, setCountry] = useState(null),

        clickedPlaceOrder = async () => {
            localStorage.clear();
            props.history.push("/thankyou");
        }

    function calculateTotalCost(items) {
        return items.reduce((sum, item) => sum += parseFloat(item.price) * parseFloat(item.count), 0);
    };


    return (
        <Box component="div" display="block" className='checkout-container'>
            <div className='shipping-address-container'>
                <div className='shipping-header'>
                    <LocalShippingTwoToneIcon />
                    <h3>Shipping Information</h3>
                </div>
                <TextField id="name-input" placeholder="Name"
                    onChange={event => setName(event.target.value)} />
                <TextField type="text" id="shipping-address" placeholder="Shipping Address"
                    onChange={event => setAddress(event.target.value)} />
                <TextField type="text" id="shipping-country" placeholder="Country"
                    onChange={event => setCountry(event.target.value)} />
            </div>
            <div className='payment-container'>
                <div className='payment-header'>
                    <AccountBalanceTwoToneIcon />
                    <h3>Payment Information</h3>
                </div>
                <TextField  type="text" id="card-number" placeholder="Credit Card Number"
                    onChange={event => setCardNumber(event.target.value)} />
            </div>

            <div className="review-order-container">
                <div className='details-header'>
                    <ListAltTwoToneIcon />
                    <h3>Order Details</h3>
                </div>
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
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.price}</TableCell>
                            <TableCell>{item.count}</TableCell>
                            <TableCell>{(parseFloat(item.count) * parseFloat(item.price)).toLocaleString()}$</TableCell>
                        </TableRow>
                    }
                    )}
                    </TableBody>
                </Table>
                <div className="total-container">
                    <h1>Total Price: {calculateTotalCost(cartItems).toLocaleString()}$</h1>
                </div>

                <Button variant="contained" type="button" className="finish-button" onClick={clickedPlaceOrder}>Complete My Order</Button>

            </div>
        </Box>

        
    
    );

};


export default CheckoutPage;