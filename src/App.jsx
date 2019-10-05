import React, { Component } from 'react';
import AddTodo from './AddTodo';
import ViewTodos from './ViewTodos';
let id = 0;

class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: []
    };
    this.addItem = this.addItem.bind(this);
    this.saveItem = this.saveItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  addItem(description, priority) {
    if (description.length === 0) {
      return;
    }
    const newTodoItems = { description: description, priority: priority, id: id };
    this.state.todoItems.push(newTodoItems);
    this.setState({ todoItems: this.state.todoItems });
    id++
  }

  saveItem(description, priority, id) {
    const todoItemsCopy = this.state.todoItems;
    for (let i = 0; i < todoItemsCopy.length; i++) {
      if (todoItemsCopy[i].id == id) {
        todoItemsCopy[i].description = description;
        todoItemsCopy[i].priority = priority;
      }
    }
    this.setState({ todoItems: todoItemsCopy });
  }

  deleteItem(id) {
    const remianingTodoItems = this.state.todoItems.filter(deletedTodoItems => {
      if (deletedTodoItems.id !== id) return deletedTodoItems;
    });
    this.setState({
      todoItems: remianingTodoItems
    });
  }

  render() {
    return (
      <div>
        <jumbotron>
          <h2 style={{fontSize: '3.5em', paddingLeft:'30px'}}>Very Simple Todo App</h2>
          <h6 style={{paddingLeft:'45px'}}>Keep track of important (and not so important) things to do!</h6>
        </jumbotron>
	    <br/>
        <div className='col-md-8'>
          <AddTodo addItem={ this.addItem } />
		</div>
		<br/>
		<div className='col-md-8'>
          <ViewTodos
            todoItems={ this.state.todoItems }
            saveItem={ this.saveItem }
            deleteItem={ this.deleteItem }
          />
		  
        </div>
      </div>
    );
  }
}

export default App;

  