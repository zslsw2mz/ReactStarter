import React, { Component, PropTypes } from 'react';

export default class AddTodo extends Component{
  render(){
    return(
      <div>
        <input type='text' ref='newItem'/>
        <button onClick={event => this.handleClick(event)}>
          Add
        </button>
      </div>
    );
  }

  handleClick(event){
    const node = this.refs.newItem;
    const text = node.value.trim();
    console.log(""+text);
    node.value = '';
  }
}
