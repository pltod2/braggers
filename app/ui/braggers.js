import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Editor from './editor';

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
        return <div className="row">
                    <div className="col-xs-12 col-sm-8 col-md-6col-lg-4">
                    dshgfkjdsjkfhs
                        <div className="box">{this.state.message}</div>
                        <div className="box"><button onClick={this.changeLabel}>Change Message</button></div>                    
                        <div className="box"><Editor.MyEditor/></div>
                    </div>
                </div>
    }
}
