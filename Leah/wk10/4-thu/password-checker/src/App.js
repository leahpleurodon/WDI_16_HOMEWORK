import React, { Component } from 'react'
import PasswordChecker from './components/PasswordChecker'
import "./App.css"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Totally Legit Password Strength Test</h1>
        </header>
        <PasswordChecker />
        <footer>
          This app was lovingly created in React by <a href="http://github.com/leahpleurodon">LeahPleurodon</a>
        </footer>
      </div>
    );
  }
}

export default App;
