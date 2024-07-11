import React, { Component,useState } from "react";
import  List  from "./components/List/List";
import  Input  from "./components/Input/Input";
import  Button  from "./components/Button/Button";
import './App.css'
import Change from './components/change/change'
export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Do coding challenges", done: false},
      { id: 2, name: "Write letter", done: false },
      { id: 3, name: "Edit cover", done: false }
    ],
    todoText: ""
  };

  onChangeInput = e => {
    this.setState({ todoText: e.target.value });
  };

  onSubmitTodo = () => {
    this.setState(({ todos, todoText }) => ({
      todos: [...todos, { id: todos.length + 1, name: todoText, done: false }],
      todoText: ""
    }));
  };

  onChangeBox = item => {
    this.setState(({ todos }) => ({
      todos: todos.map(el =>
        el.id === item.id ? { ...el, done: !el.done } : el
      )
    }));
  };

  handleDel = item => {
    this.setState(({ todos }) => ({
      todos: todos.filter(el => el.id !== item.id)
    }));
  };

  render() {
    const { todos, todoText } = this.state;
  


    return (
      <>
        <div className="container">
          <div className="app">
            <h1>#todo</h1>
            <div className="header">
              <Change/>
            </div>
            <div className="input-wrapper">
              
              <Input value={todoText} onChange={this.onChangeInput} />         
              <Button onClick={this.onSubmitTodo}>Add</Button>
             
              
            </div>
            
            <List
              list={todos}
              onChangeBox={this.onChangeBox}
              handleDel={this.handleDel}
            />
          </div>
        
        </div>
      </>
    );
  }
}
