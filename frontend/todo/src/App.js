import React from 'react';

// import Counter from './components/counterComponents/CounterComponent';
import TodoApp from './components/todo/TodoApp'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ashish Khokhariya &#128540;</p>
        <div>
          {/* <Counter />           */}
          <TodoApp />
        </div>
      </header>
    </div>
  );
}


export default App;
