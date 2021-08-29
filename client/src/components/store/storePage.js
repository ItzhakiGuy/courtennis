import React from 'react';
import data from '../../seedProducts/initialProducts.json'
import './storePage.css';
import SearchItemInStore from "../searchItemInStore";
import ProductContainer from "./productContainer";


class StorePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: data.products,
            filteredProducts: data.products,
            searchTerm: "",
            searchCount: data.products.length,
            cartItems: JSON.parse(localStorage.getItem("cartItems")) ?
                JSON.parse(localStorage.getItem("cartItems")) : []
        };
    }

    editSearchTerm = (event) => {
        const searchTerm = event.target.value;
        this.setState({
            searchTerm,
            filteredProducts: this.state.products.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()))
        });

    };

    addItemToCart = (itemToAdd) => {
        const itemsInCart = this.state.cartItems.slice();
        let isItemInCart = false;
        itemsInCart.forEach(item => {
            if (item._id === itemToAdd._id) {
                item.count += 1;
                isItemInCart = true;
            }
        });
        if (!isItemInCart) {
            itemsInCart.push({...itemToAdd, count: 1})
        }
        this.setState({cartItems: itemsInCart});
        localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
    };

    removeItemFromCart = (item) => {
        const cartItems = this.state.cartItems.slice();
        let items = cartItems.filter((removeItem) => removeItem._id !== item._id);
        this.setState({
            cartItems: items,
        });
        localStorage.setItem("cartItems", JSON.stringify(items));
    };

    numOfItems = items => items.reduce((sum, item) => sum += parseFloat(item.count), 0);

    removeAllFromCart = async () => {
        localStorage.clear();
        this.setState({cartItems: []});
    };

    render() {
        return (
            <div className="products-container">
                <main>
                    <div className="content">
                        <div className="main">
                            <SearchItemInStore count={this.state.searchCount}
                                               cartCount={this.numOfItems(this.state.cartItems)}
                                               searchTerm={this.state.searchTerm}
                                               onChange={this.editSearchTerm}
                                               onClearCart={this.removeAllFromCart}>
                            </SearchItemInStore>
                            <div className="storeItems">
                                <ProductContainer cart={this.addItemToCart} remove={this.removeItemFromCart}
                                                  products={this.state.filteredProducts} cartItems={this.state.cartItems}/>
                                
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default StorePage;
