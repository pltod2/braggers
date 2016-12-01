import * as React from 'react';
import Link from 'next/link'
import Head from '../component/Head';
import css from 'next/css'

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
    
            <div className={styles.header + " row"}>
                <div className="column column-50 column-offset-25">
                    <h1>Small Stuff</h1>
                </div>
            </div>

            <div className="row">
                <div className="column column-50 column-offset-25">
                    <Link href={`/slide2`}><button className="button" onClick={this.props.loginHandler} type="submit">Next</button></Link>        
                </div>
            </div>            
        </div>

    }
}