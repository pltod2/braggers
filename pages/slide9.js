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
                    <h2>
                        LokiJS / React / Webpack / Babel / Next.js / Fetch / Slack / Github / Medium / Express / Passswordless / Nodemailer / Commander / Draft.js / Octonode / Node.js / Markdown / CSS / JSX
                    </h2>
                </div>
            </div>
        
        </div>

    }
}