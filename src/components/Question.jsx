import React, { Component } from 'react';

import { QuestionText } from './QuestionText';
import { AnswerButton } from './AnswerButton';

export class Question extends Component {
  render() {
    return (
      <div className="question">
        {this.props.question}
        <QuestionText/>
        <div>
          <div className="answer">
            <AnswerButton name="answer1" answer= {this.props.answer}/>
            <AnswerButton name="answer2" answer= {this.props.answer}/>
            <AnswerButton name="answer3" answer= {this.props.answer}/>
            <AnswerButton name="answer4" answer= {this.props.answer}/>
        </div>
      </div>
      </div>
    );
  }
}

var items = ["answer0", "answer1", "answer2", "correctAnswer"]
class answer extends React.Component {
  render() {
    for (var i in items) {
      items.push(<answerItem title={items[i]} />);
    }
    return (<div className="answer">{items}</div>);  }
}

