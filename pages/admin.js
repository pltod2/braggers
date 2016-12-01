import React from 'react'

export default class extends React.Component {

  constructor(props) {
    console.log(props);
    super(props);
  }

  static async getInitialProps (ctx) {
    console.log('getInitialProps');
    console.log(ctx);
    return {
      currentUrl: ctx.pathname
    }
  }
  

  render () {
    console.log(this.props);
    return (
      <div>Hello World!</div>
    )
  }
}