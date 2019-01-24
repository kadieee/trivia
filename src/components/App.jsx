import React, { Component } from 'react';

import { Question } from './Question';

import '../css/App.css';


export class App extends Component {
  render() {
    return (<div className="app">
      <Question/>
    </div>);
  }
}