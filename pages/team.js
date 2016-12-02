import * as React from 'react';
import Link from 'next/link'
import Head from '../component/Head';
import css from 'next/css'
import Menu2 from '../component/Menu2';
import { style } from 'next/css'
const braggersLogo = '../static/img/braggers_logo.png';

const styles = {
  header: css({
    display: 'flex',
    marginBottom: 20,
    marginTop: 50
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
                    <img src={braggersLogo} />
                    <br/><br/>
                    <h2 className={style(styles.pcolor)}>ALEKSANDRINA</h2>
                    <h4 className={style(styles.pcolor)}>SECURITY ENGINEER</h4>
                    <br/><br/>
                    <h2 className={style(styles.pcolor)}>NATALIA</h2>
                    <h4 className={style(styles.pcolor)}>TOOLS ENGINEER</h4>
                    <br/><br/>
                    <h2 className={style(styles.pcolor)}>MEGLENA</h2>
                    <h4 className={style(styles.pcolor)}>DATABASE ENGINEER</h4>
                    <br/><br/>
                    <h2 >PLAMEN - TEAM LEAD</h2>
                </div>
            </div>

        </div>

    }
}
