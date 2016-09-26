import React, { Component } from 'react';
import './App.css';


export default class ToDoList extends Component {
  constructor(props){
  	super(props)
  	this.state = {
  		text: "",
  		todos: []
  	}
    this.handleText = this.handleText.bind(this)
  	this.handleKeyDown = this.handleKeyDown.bind(this)
    this.addEntry = this.addEntry.bind(this)
    this.editEntry = this.editEntry.bind(this)
  	this.removeEntry = this.removeEntry.bind(this)
  }
  handleText(e){
  	this.setState({text: e.target.value})
  }
  handleKeyDown(e){
    if(e.key === "Enter"){
      this.addEntry()
    }
  }
  addEntry(){
  	if(this.state.text !== "null"){
	  	const entry = {
        id: this.state.todos.length + 1,
        todo: this.state.text
  		}
  		this.state.todos.push(entry)
  		this.setState({
        text: "",
        todos: this.state.todos
      })
      document.querySelector("#textBox").value = ""
	  }
  }
  editEntry(e){
    const entry = e.target.parentNode.parentNode.children[0].innerHTML
    console.log(entry)
    //Find the entry in state
    let _target = this.state.todos.findIndex((element, index) => {
      if(element.todo === entry){
        return index
      }
    })
    if(_target === -1){
      _target = 0
    }
    const fixedTodos = this.state.todos.filter((c,index) => {
      if(index !== _target){
        return c
      }
    })
    this.setState({
      text: entry,
      todos: fixedTodos
    })
  }
  removeEntry(e){
     const entry = e.target.parentNode.parentNode.children[0].innerHTML
    console.log(entry)
    //Find the entry in state
    let _target = this.state.todos.findIndex((element, index) => {
      if(element.todo === entry){
        return index
      }
    })
    if(_target === -1){
      _target = 0
    }
    const fixedTodos = this.state.todos.filter((c,index) => {
      if(index !== _target){
        return c
      }
    })
    this.setState({
      text: this.state.text,
      todos: fixedTodos
    })
    console.log(this.state)
  }
  render() {
    return (
    <div className="add-todo">
        <p className="col-md-3" alt="worthless" />
        <input id="textBox" className="col-md-3" type="text" onKeyDown={this.handleKeyDown} onChange={this.handleText} value={this.state.text}/>
        <button className="col-md-3" onClick={this.addEntry}>Add</button>
        <p className="col-md-3" alt="worthless"/>

	      <div className="todo-list col-md-12">
	      {this.state.todos.map((current, index) => {
	      	return <p className="entry" key={index}>
						<label className="col-md-6">{current.todo}</label>
            <span className="col-md-3 action"><i className="fa fa-pencil" onClick={this.editEntry}></i><strong>Edit</strong></span>
            <span className="col-md-3 action"><i className="fa fa-times" onClick={this.removeEntry}></i><strong>Completed</strong></span>
            <br/></p>
	      })}
	      </div>
      </div>
    );
  }
}