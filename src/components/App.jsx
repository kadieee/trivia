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


class Title extends React.Component {
  render() {
    return (
      <h1 className="title">
        {this.props.title}
      </h1>
    );
  }
}


<Title title= "Questions" />
