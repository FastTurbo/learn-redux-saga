import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementAsync, fetch_user } from '../actions'

export class App extends Component {
  render() {
      let { isFetching, error, user } = this.props.user
      let data
      if(isFetching){
          data = 'Loading...'
      }else if(error){
          data = error
      }else{
          data = user
      }
    return (
      <div>
        <h1>App</h1>
        <h2>{ this.props.counter }</h2>
        <button onClick={ this.props.incrementAsync }>+</button>
        <br/>
        <h2>{ data }</h2>
        <button onClick={ this.props.fetch_user }>GET USER</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    counter: state.counter,
    user: state.user
})


export default connect(mapStateToProps, { incrementAsync, fetch_user })(App)
