import * as React from 'react';
import Link from 'next/link'
import Head from '../component/Head';
import css from 'next/css'
import Menu2 from '../component/Menu2';
import { style } from 'next/css'

const styles = {
  header: css({
    display: 'flex',
    marginBottom: 20,
    marginTop: 150
  }),
  pcolor: {
    color: '#9b4dca'
  }
  
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
                    MAIN GOALS
                    <h2>ARCHITECTURE THAT ALLOWS EASY DEPLOYMENT ON DIFFERENT INFRASTRUCTURES</h2>
                    <h2 className={style(styles.pcolor)}>ARCHITECTURE THAT ALLOWS EASY DATA INTEGRATION</h2>
                </div>
            </div>

        </div>

    }
}
