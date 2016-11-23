import * as React from 'react';
import * as ReactDOM from 'react-dom';



//HERE IT IS HOW WE CREATE STYLES PROGRAMMATICALLY
import compStyles from './welcome.css';
const classStyles = compStyles.locals; 
//TODO make factories for classes and styles
const myDivClass = "box".concat(" ").concat(classStyles.headline);
const startFreeFormField = classStyles.startFreeFormField;
const startFreeButton = classStyles.startFreeBtn;
const mySublineStyle = {
    color: '#00BCD4'
}
const braggersLogo = './img/braggers_logo.png';

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
                    <input className={startFreeFormField} name="email" type="text" placeholder="your email" />
                    <button onClick={this.props.loginHandler} className={startFreeButton} name="startFreeBTN" type="submit">S T A R T</button>
                </div>
            </div>
        </div> 
        
    }
}
