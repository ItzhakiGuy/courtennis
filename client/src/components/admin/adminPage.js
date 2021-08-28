import React from 'react';
import './adminPage.css';
import axios from 'axios';

class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            purchases: [],
        };
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            const input = event.target.value;
            const filteredPurchases = this.originalData.filter(purchaseLog => {
                if (!purchaseLog.email) return false;
                return purchaseLog.email.toLowerCase().includes(input)
            });

            if (input) {
                this.setState({
                    purchases: filteredPurchases
                })
            } else {
                this.setState({
                    purchases: this.originalData
                })
            }

        }
    }

    componentDidMount() {
        axios.get(`/purchase`)
            .then(res => {
                const purchases = res.data;
                this.originalData = purchases;
                this.setState({ purchases })
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    alert(error.response.data);
                    return;
                } else {
                    alert("something went wrong....")
                }
            });
    };

    render() {
        return (
            <div className='admin-container'>
                <h2>Admin Page</h2>

                <div className='search-bar-container'>
                    <h1 className='search-bar-title'>{this.props.header}</h1>
                    < input type="text" className='search-bar' placeholder={"Filter by user"} onKeyDown={this.handleKeyPress} />
                </div>

                <table className="table">
                    <thead>
                        <tr className="red">
                            <th>Email</th>
                            <th>Order ID</th>
                            <th>Purchase time</th>
                            <th>Items Ordered</th>
                            <th>Order Price</th>
                        </tr>
                    </thead>
                    <tbody className="table">
                        {this.state.purchases.map(product => (
                            <tr>
                                <td>{product.email}</td>
                                <td>{product.id}</td>
                                <td>{product.time}</td>
                                <td>{product.purchase.map(item => (`${item._id} - ${item.count} `))}</td>
                                <td>{product.price}$</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default AdminPage;
