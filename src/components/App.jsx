import React, { Component } from 'react';

import{Question} from './Question';

import '../css/App.css';
import { getQuestions } from '../clients/firebase';


export class App extends Component {
  constructor(props) {
    super(props);
    this.state= {correctAnswer: 2};
    getQuestions((questions) => {
        console.log(questions);
         this.setState({
           ...this.state,
           "questions": questions
         });
   
      });
    }
    answer(){ this.state.setState({
        imageURL: "",
        correctAnswer: "2",
        wrongAnswers: ["3", 
          " 12 ", " 2.5"],
      selectedAnswer: "2",
    });
  }
   

  render() {
    return (<div className="app">
      <Question question="What is one plus one?" 
       answer1="2.5"
       answer2="3"
       answer3="12"
       answer4="2"
      />
      <Title title="Do you know addition?" />
    </div>);
  }
}




class Title extends React.Component {
  render() {
    return (
      <h1 className="title">
        {Question}
      </h1>
    );
  }
}

