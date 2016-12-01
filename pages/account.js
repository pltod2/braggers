import React from 'react'
import { style } from 'next/css'
import * as  _ from 'lodash'
import MyEditor from '../component/editor/editor';
const ReactMarkdown = require('react-markdown');
import Head from '../component/Head';
import Menu from '../component/Menu';
const Requester = require('../integration/requester');
const endpoints = require('../api/endpoints');


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''  
    }    
  }

  static async getInitialProps (ctx) {
    const user = await Requester.get(endpoints.getUserByIdEndpointClient + ctx.query.id);
    return {
      currentUrl: ctx.pathname,
      user: user[0]
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
              <Head />
              <Menu currentUrl={this.props.currentUrl} />
              <div className="row">
                <div className="column">
                  <img style={{marginLeft: "20px"}} src={ this.props.user.largeImg} />
                  <div style={{marginLeft: "20px"}}>
                    <h3 > { this.props.user.firstName + ' ' + this.props.user.lastName } </h3>
                    <h6> Social Index: { this.props.user.githubFollowers || 'Not evaluated yet!' } </h6>
                  </div> 
                </div>
                <div className={"column column-75 " + style(styles.ed)} >
                  <h5 className={style(styles.pcolor)}> What's happening? </h5>
                  <MyEditor onChangeHandler={this.onChangeHandler}/>
                </div>
              </div>              
              <ReactMarkdown source={this.state.input} />        
            </div>          
        )
  }
}

const styles = {
  ed: {
    marginRight: '20px'
  },
  pcolor: {
    color: '#9b4dca'
  }    
}