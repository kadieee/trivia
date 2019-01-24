import React, { Component } from 'react';

import { QuestionText } from './QuestionText';
import { AnswerButton } from './AnswerButton';

export class Question extends Component {
  render() {
    return (
      <div className="question-text">
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