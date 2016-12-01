import React from 'react'
import Head from '../component/Head';

const Requester = require('../integration/requester');
const endpoints = require('../api/endpoints');

export default class extends React.Component {

  //Note that thanks to next.js users is exposed in props
  static async getInitialProps (ctx) {
    const data = await Requester.get(endpoints.restrictedEndpoint);
    return {
      data: data,
      currentUrl: ctx.pathname
    }
  }  

  render () {
    console.log(this.props);
    return (
      <div>
        <Head />
        <Menu currentUrl={this.props.currentUrl} />
        <div className={style(styles.header)}>
          <h3> The Lovely Admins Of Our Social Network </h3>
        </div>
      </div>
    )
  }
}