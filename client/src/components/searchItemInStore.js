import React, {Component} from "react";
import "./store/browse.css";
import TextField from '@material-ui/core/TextField';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Button from '@material-ui/core/Button';


class SearchItemInStore extends Component {

    render() {
        const {searchTerm, onChange, cartCount, onClearCart} = this.props;
        return (
            <div className="filter">
                <div className='search-and-text'>
                    <TextField id="outlined-search" label="Search field" type="search" variant="outlined" value={searchTerm}
                               onChange={onChange} />
                    
                </div>
                <div className="cart-items-container">
                        <h3 className="filter-result">{cartCount}</h3>
                        <h3 className="filter-result">Items in your cart</h3>
                </div>
                <Button variant="contained" color="primary" disableElevation onClick={onClearCart}>
                    <RemoveShoppingCartIcon /> Empty Cart
                </Button>
            </div>
        );
    }
}

export default SearchItemInStore;