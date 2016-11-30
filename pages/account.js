import React from 'react'
import { style } from 'next/css'
import * as  _ from 'lodash'
import MyEditor from '../component/editor/editor';
import Head from '../component/Head';
const ReactMarkdown = require('react-markdown');
import 'isomorphic-fetch'

export default ({ url: { query: { id } } }) => {

  async function getUser() { 
    const res = await fetch('http://localhost:8000/getUserById', {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, text/html',
        'Content-Type': 'application/json; charset=utf-8'
      },      
      body: JSON.stringify({ user: id }) 
    });
    console.log(res);
  }

  getUser(); 
  
  // const user = await res.json();
  // return { item: user }

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

                      //   <img src={ item.githubAvatar} alt={item.firstName} width={200} height={200} />
                      // </div>
                      // <div className="col-xs">
                      //   <h1 className={style(styles.heading)}>
                      //       Real Name: { item.firstName }
                      //     <br/>
                      //   </h1>

      return (
          <div>
            <Head />
                  <div>
                    <div className="row">
                      <div className="col-xs">
                        <h3> AXWAY ACADEMY SOCIAL NETWORK </h3>  
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-xs">

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