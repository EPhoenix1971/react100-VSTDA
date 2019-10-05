import React from 'react';

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      priority: ''
    };
    this.handleTodoChange = this.handleTodoChange.bind(this);
  }
  handleTodoChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className='col-md-8'>
        <hr/>
	      <hr/>
        <br/>
        <div className='form-group'>
          <label htmlFor='create-todo-text'>Add a New Todo</label>
          <textarea
            placeholder='add your new todo item and a description here...'
            className='create-todo-text'
            name='description'
            type='string'
            value={ this.state.description }
            onChange={ this.handleTodoChange }
          />
        </div>

        <div className='form-group'>
          <label htmlFor='create-todo-priority'>
            Select a Priority Level
          </label>
          <select
            className='create-todo-priority form-control'
            name='priority'
            value={ this.state.priority }
            onChange={ this.handleTodoChange }
          >
            <option style={{fontStyle:'italic', fontSize:'10px'}}>
              Select a priority</option>
            <option value='1'>Low priority</option>
            <option value='2'>Medium priority</option>
            <option value='3'>High priority</option>
          </select>
        </div>

        <button
	        name='button'
					type='submit'
					style={{backgroundColor: "black", color: "white"}} 
          className="create-todo"
	        onClick={ () => this.props.addItem(this.state.description, this.state.priority) }
	        >
	        ADD
	        </button>
      </div>
    );
  }
}
export default AddTodo;
