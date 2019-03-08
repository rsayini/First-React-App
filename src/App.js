import './App.css';
import React, { Component } from "react";
import MainForm from './Components/MainForm';

class App extends Component {
  
  render() {
    return (
      <div className="App-container">
        <header className="App-header">
         Summer Associate         
        </header>
        <div className='App-main'>
          <main className="container">
              <MainForm></MainForm>
          </main>
        </div>
        <div className="App-footer"></div>
      </div>
    );
  }
}

export default App;
