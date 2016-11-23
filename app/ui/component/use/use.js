import * as React from 'react';
import * as ReactDOM from 'react-dom';

//var request = require('request');
import compStyles from './use.css';

export default class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users:   [{"id": 16664539, "login": "ngeorgieva", "email": "nat.m.georgieva@gmail.com", "repos": "repos list"}]
        }
    }

    componentDidMount() {
        var that = this;
        //this.getData();
    }

    getData = () => {
        var main = this;
        request.get('http://localhost:3000/users', function(err, httpResponse, body){
            main.setState({
                users: JSON.parse(body)
            }); 
        });
    }

    deleteUser = (userId) => {
        if (confirm('Are you sure?')) {
            var main = this;
            var options = {
                "url": "http://localhost:3000/users/"+userId,
            }
            request.delete(options, function(error, response, body) {
                main.getData();
            });

            return true;
        } else {
            return false;
        }

    }

    toDate (time) {
        var date = new Date(time);
        return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }

    render() {
        var self = this;
        return <section id="module">
                <h2>Users</h2>
                <div className="tblHeader">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Login</th>
                                <th>Email</th>
                                <th>Repos</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div className="tblContent">
                    <table>
                        <tbody>
                        {this.state.users.map(function (user) {
                            return <tr>
                                <td>{user.id}</td>
                                <td>{user.login}</td>
                                <td>{user.email}</td>
                                <td>{user.repos}</td>
                                <td>
                                    <a href="#" className="item-action"><i className="fa fa-pencil" aria-hidden="true"></i></a> 
                                    <a href="#" onClick={self.deleteUser.bind({}, user.id)} className="item-action"><i className="fa fa-times" aria-hidden="true"></i></a> 
                                    <a href="#" className="item-action"><i className="fa fa-eye" aria-hidden="true"></i></a>
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </section>
    }
}