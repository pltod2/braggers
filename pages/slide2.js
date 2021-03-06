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

  static async getInitialProps (ctx) {
    return {
      currentUrl: ctx.pathname
    }
  }  

    render() {
        return <div>
            
            <Head />
            <Menu2 currentUrl={this.props.currentUrl} />

            <div className={styles.header + " row"}>
                <div className="column column-50 column-offset-25">
                    <h3>API</h3>
                    <h3>COMPONENTS</h3>
                    <h3>DATA</h3>
                    <h3>INTEGRATION (or THIRD-PARTY)</h3>
                    <h3>PAGES (or Routes)</h3>
                    <h3>STATIC RESOURCES</h3>
                    <h3>DEPLOYMENT</h3>
                </div>
            </div>

        </div>

    }
}