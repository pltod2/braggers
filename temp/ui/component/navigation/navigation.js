import * as React from 'react';
import * as ReactDOM from 'react-dom';
import compStyles from './navigation.css';

const logoStyle = {
    paddingTop: "10px",
    paddingLeft: "10px",
    paddingRight: "10px",
    height: '32px',
    cursor: 'pointer'
}

const logoItem = {
    float: 'left'
}
 
export default class Navigation extends React.Component {

    leftMenu = () => {
        return <ul className="leftMenu">                         
                            <li onClick={this.props.changeSection.bind(null, 'use')}>
                                <a className={this.props.section === 'use' && "active"} href="#">
                                    <i className="fa fa-users"></i> Use
                                </a>
                            </li>
                            <li onClick={this.props.changeSection.bind(null, 'administrate')}>
                                <a href="#" className={this.props.section === 'administration' && "active"}>
                                    <i className="fa fa-gamepad"></i> Administrate
                                </a>
                            </li>
                        </ul>
    }

    render() {
                return <div className='navigation'>
                            <ul style={logoItem}>
                                <li onClick={this.props.changeSection.bind(null, 'welcome')}>
                                    <img src={this.props.portalLogo} style={logoStyle} />
                                </li>
                            </ul>
                            {this.leftMenu()}
                            <div className='clearfix'></div>
                        </div>
                        
    }
}

