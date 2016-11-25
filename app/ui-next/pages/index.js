import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Head from 'next/head';

// import compStyles from '../styles/index.css';
// const classStyles = compStyles.locals; 
// const myDivClass = "box".concat(" ").concat(classStyles.headline);
// const startFreeFormField = classStyles.startFreeFormField;
// const startFreeButton = classStyles.startFreeBtn;
// <style>{globalStyle}</style>
// const globalStyle = `
// body {
//     background-color: green;
// }
// `

const mySublineStyle = {
    color: '#00BCD4'
}
const braggersLogo = '../static/img/braggers_logo.png';

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return <div>
            <Head>
                <meta charSet="utf-8"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                <title>B R A G G E R S - 2 0 1 6</title>
                <meta name="description" content=""/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
                <link rel="stylesheet" href="../static/css/normalize.css"/>
                <link rel="stylesheet" href="../static/css/flexboxgrid.min.css"/>
                <link rel="stylesheet" href="../static/css/font-awesome.min.css"/>
            </Head>
            <div className="row center-xs">
                <div className="col-xs-6">
                    <div>B R A G G E R S</div>
                    <img src={braggersLogo} />
                </div>
            </div>
            <div className="row center-xs">
                <div className="col-xs-6">
                    <h1 className="hdg hdg_1 mix-hdg_light" style={mySublineStyle}>share your ideas. make an impact.</h1>
                </div>
            </div>
            <div className="row center-xs">
                <div className="col-xs-3">
                    <input name="email" type="text" placeholder="your email" />
                    <button onClick={this.props.loginHandler} name="startFreeBTN" type="submit">S T A R T</button>
                </div>
            </div>
        </div> 
        
    }
}