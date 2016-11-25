import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as debug from "debug";
const log = debug("BRAGGERS");

import styles from './braggers.less';
import Welcome from "./component/welcome/welcome";
import Home from "./component/home/home";

export default class Braggers extends React.Component {

    /**
     * Internal APIs used as part of the application architecture 
     */
    constructor(props) {
        super(props);
        this.state = {
            currentSection: "home",
            authenticated: false
        }
    }

    login = (selectedSection) => {
        this.setState({
            authenticated: true
        })
    }

    render() {
        const area = this.state.authenticated ? <Home /> : <Welcome loginHandler={this.login} />;
        return <div>{area}</div>;
    }
}
