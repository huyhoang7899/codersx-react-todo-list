import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import LoginForm from './components/LoginForm.js';

function App() {
           
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Header />
        <LoginForm />
        {/* <TodoList/> */}
      </header>
      
    </div>
  );
}

// function TodoList() {
//   const todos = [
//     'Go to market',
//     'Buy food',
//     'Make dinner'
//   ];

//   const Todos = todos.map(todo => <li>{todo}</li>);

//   return (
//     <ul>
//       {Todos}
//     </ul>
//   );
// }

export default App;
