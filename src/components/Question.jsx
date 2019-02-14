import React, { Component } from 'react';

import { QuestionText } from './QuestionText';
import { AnswerButton } from './AnswerButton';

export class Question extends Component {
  render() {
    return (
      <div className="question">
        <QuestionText/>
        <div>
            <AnswerButton/>
            <AnswerButton/>
            <AnswerButton/>
            <AnswerButton/>
        </div>
      </div>
    );
  }
}
var items = ["answer0", "answer1", "answer2", "correctAnswer"];
class answer extends React.Component {
  render() {
    var s_items = [];
    for (var i in items) {
      s_items.push(<answerItem title={items[i]} />);
    }
    return (<div className="answer">{s_items}</div>);  }
}
class answer extends React.Component {
  render() {
    return (<div className="answer-item">{this.props.answer}</div>);  }
}

