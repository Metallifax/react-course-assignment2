import React, { Component } from 'react';
import './App.css';

import ValidationComponent from './ValidationComponent/Validation';
import Char from './CharComponent/Char';

class App extends Component {
  state = {
    string: 'Hello world',
  }

  handleTextChange = (event) => {
    this.setState({
      string: event.target.value
    })
  }

  deleteCharHandler = (index) => {
    const text = this.state.string.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({ string: updatedText })
  }

  render() {
    const charList = this.state.string.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={() => this.deleteCharHandler(index)}
      />
    });

    return (
      <div className="App">
        <h1>Welcome to Char Splitter</h1>
        <input type="text" onChange={this.handleTextChange} value={this.state.string} />
        <p>{this.state.string}</p>
        <ValidationComponent string={this.state.string} />
        {charList}
      </div>
    )
  };
}

export default App;
