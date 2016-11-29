import React from 'react'
//import posts from '../data/posts'
import users from '../data/users'
import { style } from 'next/css'
import * as  _ from 'lodash'
import MyEditor from '../component/editor/editor';
import Head from 'next/head';
const ReactMarkdown = require('react-markdown');

export default ({ url: { query: { id } } }) => {
  const item =  _.find(users, { githubUsername: id })
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

  class Account extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          input: ''  
        }
    }

    onChangeHandler = (newValue) => {
      this.setState({
        input: newValue
      })
    }
    
    render () {

      return (
          <div>
                  <Head>
                      <meta charSet="utf-8"/>
                      <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
                      <title>B R A G G E R S - 2 0 1 6</title>
                      <meta name="description" content=""/>
                      <meta name="viewport" content="width=device-width, initial-scale=1"/>
                      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"/>
                      <link rel="stylesheet" href="../static/css/normalize.css"/>
                      <link rel="stylesheet" href="../static/css/flexboxgrid.min.css"/>
                      <link rel="stylesheet" href="../static/css/font-awesome.min.css"/>
                      <link rel="stylesheet" href="../static/css/plugin.css"/>
                  </Head>
          
                  <div>
                    <div className="row">
                      <div className="col-xs">
                        <h3> AXWAY ACADEMY SOCIAL NETWORK </h3>  
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs">
                        <img src={ item.githubAvatar} alt={item.firstName} width={200} height={200} />
                      </div>
                      <div className="col-xs">
                        <h1 className={style(styles.heading)}>
                          Character: { item.githubUsername }
                          <br/>
                          <br/>
                          Real Name: { item.firstName }
                        </h1>
                      </div>
                    </div>  
                    <div className="row">
                      <div className="col-xs-6">
                          <MyEditor onChangeHandler={this.onChangeHandler}/>
                          <ReactMarkdown source={this.state.input} />
                      </div>
                    </div>        
                  </div>
          </div>            
        )
      }
  }

  return <Account />
 
}