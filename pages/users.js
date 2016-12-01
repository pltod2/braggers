import React from 'react'
import { style } from 'next/css'
import Link from 'next/link'
import * as  _ from 'lodash'
import Head from '../component/Head';
import Menu from '../component/Menu';

const Requester = require('../integration/requester');
const endpoints = require('../api/endpoints');

export default class extends React.Component {

  //Note that thanks to next.js users is exposed in props
  static async getInitialProps (ctx) {
    const users = await Requester.get(endpoints.getUsersEndpoint);
    return {
      users: users,
      currentUrl: ctx.pathname
    }
  }

  render () {
    return (
      <div>
      <Head />
      <Menu currentUrl={this.props.currentUrl} />
      <div className={style(styles.header)}>
        <h3> The Lovely Members Of Our Social Network </h3>
      </div>
      <section className='container'>
        <blockquote>
          <p className={style(styles.pcolor)}><em>Yeah!! Our community is amazing.</em></p>
        </blockquote>
      </section>        
      <section className='container'>
        <table className={style(styles.table)}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Nickname</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
                this.props.users.map( (user, i) => (
                    <tr key={i}>
                        <td><img src={ user.smallImg} /> { user.firstName + ' ' + user.lastName }</td>
                        <td>{ user.slackUsername }</td>
                        <td>{ user.slackEmail }</td>
                        <td>
                          <Link href={`/account?id=${user.slackId}`}><button className="button button-outline" onClick={this.props.loginHandler} name="startFreeBTN" type="submit">Details</button></Link>
                        </td>                        
                    </tr>
                ))
            }
        </tbody>
        </table>
      </section>
      </div>
    )
  }
}

const styles = {
  header: {
    textAlign: 'center'
  },

  pcolor: {
    color: '#9b4dca'
  },

  table: {
    width: '100%',
    align: "center"
  }
}