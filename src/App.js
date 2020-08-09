import React from 'react';
//import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';


function App() {
  return (
    <div className="App">
     <h4>Hello World</h4>
     <TodoInput/>
     <TodoList/>
    </div>
  );
}

export default App;
