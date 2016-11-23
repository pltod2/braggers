import * as debug from "debug";
const log = debug("HOME");

import compStyles from './home.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import all factories for APIs
import Navigation from "../navigation/navigation";
import Use from "../use/use";
import Administrate from "../administrate/administrate";

const portalLogo = "./img/braggers_logo_simple.png";


const classStyles = compStyles.locals; 

export default class Home extends React.Component<{}, AppProps>{

    /**
     * Internal APIs used as part of the application architecture 
     */
    constructor(props) {
        super(props);
        this.state = {
            currentSection: "use"
        }
    }

    changeSection = (selectedSection) => {
        this.setState({
            currentSection: selectedSection
        })
    }


    render() {
        var comp;

        if (this.state.currentSection == 'use') {
            comp = <Use />;
        } else if (this.state.currentSection == 'administrate') {
            comp = <Administrate />;
        }

        return <div className={classStyles.newImg}>
                  <Navigation changeSection={this.changeSection} portalLogo={portalLogo} section={this.state.currentSection}></Navigation>
                  {comp}
               </div>;
    }
}
