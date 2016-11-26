import React from 'react'
//import posts from '../data/posts'
import users from '../data/users'


import low from 'lowdb'
const db = low('db')
console.log(db);

import { style } from 'next/css'
import Link from 'next/link'
import * as  _ from 'lodash'


export default class extends React.Component {
  static getInitialProps () {
    return { users: users }
  }

  // componentDidMount() {
  //   db.defaults({ posts: [] })
  //     .value()

  //   // Data is automatically saved to localStorage
  //   db.get('posts')
  //     .push({ title: 'lowdb' })
  //     .value()  
  // }

  render () {
    return (
      <div>
      <div className={style(styles.header)}>
        <h3> AXWAY ACADEMY SOCIAL NETWORK </h3>
      </div>
      <table className={style(styles.table)}>
        <thead>
          <tr>
              <th className={style(styles.th)}>Real Name</th>
              <th className={style(styles.th)}>Social Index</th>
              <th className={style(styles.th)}>Nickname</th>
          </tr>
        </thead>
        <tbody>
          {
              this.props.users.map( (user, i) => (
                  <tr key={i}>
                      <td className={style(styles.td)}>{ user.firstName + ' ' + user.lastName }</td>
                      <td className={style(styles.td)}>{ user.githubFollowers }</td>
                      <td className={style(styles.td)}>
                        <Link href={`/account?id=${user.githubUsername}`}>{ user.githubUsername }</Link>
                      </td>
                  </tr>
              ))
          }
       </tbody>
      </table>
      </div>
    )
  }
}

const styles = {
  th: {
    background: '#00cccc',
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: '12px',
    padding: '12px 35px',
  },

  header: {
    font: '15px Monaco',
    textAlign: 'center'
  },

  table: {
    fontFamily: 'Arial',
    margin: '25px auto',
    borderCollapse: 'collapse',
    border: '1px solid #eee',
    borderBottom: '2px solid #00cccc'
  },

  td: {
    color: '#999',
    border: '1px solid #eee',
    padding: '12px 35px',
    borderCollapse: 'collapse'
  },

  list: {
    padding: '50px',
    textAlign: 'center'
  },

  photo: {
    display: 'inline-block'
  },

  photoLink: {
    color: '#333',
    verticalAlign: 'middle',
    cursor: 'pointer',
    background: '#eee',
    display: 'inline-block',
    width: '250px',
    height: '250px',
    lineHeight: '250px',
    margin: '10px',
    border: '2px solid transparent',
    ':hover': {
      borderColor: 'blue'
    }
  }
}