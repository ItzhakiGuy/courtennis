import React, {Component} from "react";
import "../store/browse.css";
import TextField from '@material-ui/core/TextField';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';


class SearchItemInStore extends Component {

    render() {
        const {searchTerm, onChange, cartCount, onClearCart} = this.props;
        return (
            <div className="filter">
                <div className="search">
                    <TextField label="Search field" type="search" variant="outlined" value={searchTerm}
                               onChange={onChange} />
                    
                </div>
                <Fab variant="extended" className="cart-items-container" disableFocusRipple>
                    {cartCount} Items in your cart
                </Fab>
                <Button variant="contained" color="primary" disableElevation onClick={onClearCart}>
                    <RemoveShoppingCartIcon /> Empty Cart
                </Button>
            </div>
        );
    }
}

export default SearchItemInStore;