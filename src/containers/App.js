import React, { Component } from 'react';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export default class App extends Component {
  render(){
    return(
      <div>
        <AddTodo />
        <TodoList />
      </div>
    );
  }
}
