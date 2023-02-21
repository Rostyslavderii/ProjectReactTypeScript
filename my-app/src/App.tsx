import React from 'react';
import logo from './logo.svg';
import './App.css';

import TodoList from './Components/toDoList';

class App extends React.Component {
  render() {
    const todos = [{id:'1',  title: 'text'}]
    return (
      <div className="App">
        <TodoList todos={todos} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
