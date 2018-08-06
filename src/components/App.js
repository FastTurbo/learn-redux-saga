import React, { Component } from 'react';
import { connect } from 'react-redux'
import { increment } from '../actions'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h2>{ this.props.counter }</h2>
        <p>
          <button onClick={() => this.props.increment() }>+</button>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  counter:state.counter
})



export default connect(mapStateToProps, { increment })(App);
