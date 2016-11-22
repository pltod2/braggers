import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Editor from './editor';

import styles from './braggers.less';

//HERE IT IS HOW WE CREATE STYLES PROGRAMMATICALLY
import compStyles from './braggers.css';
const classStyles = compStyles.locals; 
//TODO make factories for classes and styles
const myDivClass = "box".concat(" ").concat(classStyles.headline);
const startFreeFormField = classStyles.startFreeFormField;
const startFreeButton = classStyles.startFreeBtn;
const mySublineStyle = {
    color: "rgb(254, 242, 221)"
}

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "THIS IS MY REACT APP"
        }
    }

    changeLabel = (selectedSection) => {
        this.setState({
            message: "...AND I ENJOY IT A LOT!"
        })
    }

    render() {
        return <div>
            <div className="row center-xs">
                <div className="col-xs-6">
                    <div className={myDivClass}>B R A G G E R S</div>
                </div>
            </div>
            <div className="row center-xs">
                <div className="col-xs-6">
                    <h1 className="hdg hdg_1 mix-hdg_light" style={mySublineStyle}>share your ideas. make an impact.</h1>
                </div>
            </div>
            <div className="row center-xs">
                <div className="col-xs-3">
                    <input className={startFreeFormField} name="email" type="text" placeholder="start for free with email" />
                    <button className={startFreeButton} name="startFreeBTN" type="submit">Go</button>
                </div>
            </div>
        </div> 
        
    }
}
