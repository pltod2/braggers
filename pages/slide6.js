import * as React from 'react';
import Link from 'next/link'
import Head from '../component/Head';
import css from 'next/css'
import Menu2 from '../component/Menu2';


const styles = {
  header: css({
    display: 'flex',
    marginBottom: 20,
    marginTop: 150
  })
}

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <Head />
            <Menu2 currentUrl={this.props.currentUrl} />

            <div className={styles.header + " row"}>
                <div className="column column-50 column-offset-25">
                    <h3>Code in the form of well defined reusable pieces with proper granularity. You are well prepared to ship it either in the form of #microservices or as #monolith depending on the use case.</h3>
                    <br/>    
                    <h3>Think about DevOps Engineers! They are nice guys.</h3>                    
                </div>
            </div>
        
        </div>

    }
}