import React, { Component } from 'react';
import './App.css';
import PollEntry from './pollEntry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      question: '',
      options: [
        'Option...',
        'Option...'
      ]
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.checkValidInput = this.checkValidInput.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      question: e.target.value
    })
  }

  handleOptionChange(options) {
    this.setState({
      options
    })
  }

  handleSubmit() {
    if (!this.checkValidInput()) {
      return;
    }
    let result = this.state.question;
    for (let i = 0; i < this.state.options.length; i++) {
      result += this.state.options[i]
    }
    this.setState({
      question: ''
    })
    console.log(JSON.stringify(result))
  }

  checkValidInput() {
    if (this.state.question.length > 140) {
      alert('Poll question must be 140 characters or less.');
      return false;
    } else {
      return true;
    }

  }

  render() {
    return (
      <div className="App">
        <h1 className="header">Polly</h1>
        <div className="polly-headline">
          <p>Make a Polly by typing a question or rolling the dice to create a random one.</p> 
        </div>
        <textarea id="poll-input" 
          rows="5" 
          onChange={this.handleChange} 
          value={this.state.question}>
        </textarea>
        <div className="outer-input-div">
          <div>{this.state.options.map((item, index) => {
            return <PollEntry item={item} key={index} handleOptionChange={this.handleOptionChange}/>
          })}</div>
        </div>
        {this.state.options.length > 1 && this.state.question.length > 0 ?
        <button className="poll-submit valid" type="submit" onClick={this.handleSubmit}>Make My Polly</button>
        :
        <button className="poll-submit invalid" type="submit" onClick={this.handleSubmit}>Make My Polly</button>
        }
        
        <ul className="footer">
          <li><a href="/">App</a></li>
          <li><a href="/">Community</a></li>
          <li><a href="/">Privacy</a></li>
          <li><a href="/">Terms</a></li>
          <li><a href="/">Press</a></li>
        </ul>
      
      </div>
    );
  }
}

export default App;
