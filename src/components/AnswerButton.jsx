import React, { Component } from 'react';

export class AnswerButton extends Component {
    handleClick(){
      console.log("hello");
    }
    constructor(props) {
    super(props);
    this.state= {correctAnswer: 2};
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
     if (this.state.correctAnswer){
      return(
       <button onClick={() => this.handleClick()}>
       <font color="green">
        Click Number { this.state.click_count }
      </font>
      {this.props.answer}
    </button>
      )
     }else{
       return(
        <button onClick={() => this.handleClick()}>
         <font color="red">
          Click Number { this.state.click_count }
        </font>
        {this.props.answer}
      </button>
       )
  }

}
 }


