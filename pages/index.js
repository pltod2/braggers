import * as React from 'react';
import Link from 'next/link'
import Head from '../component/Head';
const braggersLogo = '../static/img/braggers_logo.png';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Head />
            <div className="row center-xs">
                <div className="col-xs-6">
                    <img src={braggersLogo} style={{ marginTop: '200px' }} />
                </div>
            </div>
            <div className="row center-xs">
                <div className="col-xs-7">
                    <h1 className="hdg hdg_1 mix-hdg_light">share your ideas. make an impact.</h1>
                </div>
            </div>
            <div className="row center-xs">
                <div className="col-xs-3">
                    <input name="email" type="text" placeholder="click to enter email" />
                    <Link href={`/users`}><button className="button" onClick={this.props.loginHandler} type="submit">join</button></Link>
                </div>
            </div>
        </div>

    }
}