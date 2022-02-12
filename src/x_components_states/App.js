import React, { Component } from 'react';

export default class App extends Component {
  constructor() {
    console.log('constructor has called');
    super();
    this.state = {
      number: 0,
    };
    this.increaseEventHandler = this.increaseEventHandler.bind(this);
  }

  increaseEventHandler() {
    console.log('increaseEventHandler has called');
    this.setState(prevState => {
      return {
        number: prevState.number + 1,
      };
    });
  }

  render() {
    console.log('render has called');
    return (
      <div className='container'>
        <h1>{this.state.number}</h1>
        <button className='btn btn-primary' onClick={this.increaseEventHandler}>
          {'click'.toLocaleUpperCase()}
        </button>
      </div>
    );
  }
}
