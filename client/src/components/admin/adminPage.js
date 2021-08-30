import React from 'react';
import './adminPage.css';
import axios from 'axios';

class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            usernames: [],
        };
    }

    componentDidMount() {
        axios.get(`/users`)
            .then(res => {
                const usernames = res.data.usersList;
                this.originalData = usernames;
                this.setState({ usernames })
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

                <table className="table">
                    <thead>
                        <tr className="red">
                            <th>All Store Usernames</th>
                        </tr>
                    </thead>
                    <tbody className="table">
                        {this.state.usernames.map(username => (
                            <tr>
                                <td>{username}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        );
    }
}

export default AdminPage;
