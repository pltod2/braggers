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
                    <h3>SOMETHING IS WRONG WITH ROUTERS</h3>
                    <h3>SOMETHING IS WRONG WITH HUGE APPS AND REDUX</h3>
                </div>
            </div>

        </div>

    }
}