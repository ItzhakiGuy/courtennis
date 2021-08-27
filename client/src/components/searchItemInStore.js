import React, {Component} from "react";
import "./store/storePage.css";

class SearchItemInStore extends Component {

    render() {
        const {searchTerm, onChange, cartCount, onClearCart} = this.props;
        return (
            <div className="filter">
                <div className='search-and-text'>
                    <div className="search">
                        <input type="search" placeholder="What are you looking for?" value={searchTerm}
                               onChange={onChange} />
                    </div>

                    <div className="filter-result-container">
                        <h3 className="filter-result">You have {cartCount} items in your cart</h3>
                    </div>
                </div>
                <button onClick={onClearCart}>Empty My Cart</button>
            </div>
        );
    }
}

export default SearchItemInStore;