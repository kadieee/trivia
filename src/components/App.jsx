import React, { Component } from 'react';

import { Question } from './Question';

import '../css/App.css';


export class App extends Component {
    constructor(props) {
    super(props);
    this.state= {correct_answer: 0};
    }
  render() {
    return (<div className="app">
      <QuestionText question= "1"/>
      <Title title= "Questions" />
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
class QuestionText extends React.Component {
  constructor(props) {
  super(props);
  this.state= {click_count: 0};
  }
  handleClick() {
    var new_click= this.state.click_count + 1;
    this.setState({ click_count: new_click });
  }

  }
  render() {  
    return (
      <button onClick={() => this.handleClick()}>
        Click Number { this.state.click_count }
      </button>
      );
  }
}


