import React from 'react'
//import posts from '../data/posts'
import users from '../data/users'
import { style } from 'next/css'
import * as  _ from 'lodash'

export default ({ url: { query: { id } } }) => {
  const item =  _.find(users, { githubUsername: id })

  return (
    <div className={style(styles.main)}>
      <div className={style(styles.header)}>
        <h3> AXWAY ACADEMY SOCIAL NETWORK </h3>
      </div>
      <div className={style(styles.panel)}>
        <h1 className={style(styles.heading)}>
          Character: { item.githubUsername }
          <br/>
          <br/>
          Real Name: { item.firstName }
        </h1>
      </div>

      <div className={style(styles.singlePhoto)}>
        <img src={ item.githubAvatar} alt={item.firstName} width={500} height={500} />
      </div>
    </div>
  )
}


const styles = {
  main: {
    padding: '50px'
  },

  header: {
    font: '15px Monaco',
    textAlign: 'center'
  },

  panel: {
    float: 'right',
    marginRight: '140px',
    width: '200px'
  },

  singlePhoto: {
    border: '1px solid #999',
    width: '300px',
    height: '300px',
    float: 'left'
  },

  heading: {
    font: '15px Monaco'
  }
}