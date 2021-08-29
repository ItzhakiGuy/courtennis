import React, {Component} from "react";
import "./store/storePage.css";
import TextField from '@material-ui/core/TextField';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

class SearchItemInStore extends Component {

    render() {
        const {searchTerm, onChange, cartCount, onClearCart} = this.props;
        return (
            <div className="filter">
                <div className='search-and-text'>
                    <TextField id="outlined-search" label="Search field" type="search" variant="outlined" value={searchTerm}
                               onChange={onChange} />
                    <div className="filter-result-container">
                        <h3 className="filter-result">You have {cartCount} items in your cart</h3>
                    </div>
                </div>
                <button onClick={onClearCart}>
                    <RemoveShoppingCartIcon /> Empty Cart
                    </button>
            </div>
        );
    }
}

export default SearchItemInStore;