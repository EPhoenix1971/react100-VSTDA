import React from 'react';

function handleCompletedTodo(completedTodo) {
  if (completedTodo === true) {
    return 'line-through';
  } else {
    return '';
  }
}

function handlePriorityColor(priority) {
  if (priority == 1) {
    return 'success';
  } else if (priority == 2) {
    return 'warning';
  } else if (priority == 3) {
    return 'danger';
  }
}



class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.description,
      priority: this.props.priority,
      toggleDisplay: false,
      completedTodo: false
    };
	this.handleTodoChange = this.handleTodoChange.bind(this);
	this.handleCrossedOut = this.handleCrossedOut.bind(this);
    this.handleEditDisplay = this.handleEditDisplay.bind(this);
    
  }

  handleTodoChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleCrossedOut() {
    this.setState({
      completedTodo: !this.state.completedTodo
    });
  }

  handleEditDisplay() {
    this.props.saveItem(
      this.state.description,
      this.state.priority,
      this.props.id
    );
    this.setState({
      toggleDisplay: !this.state.toggleDisplay
    });
  }

  

  render() {
    return (
      
		  
    <div>		
        <li
          className={ `list-group-item-${handlePriorityColor(this.state.priority)} clearfix` }
        >
          <input
            type='checkbox'
            style={ { marginleft: 1} }
            value={ this.state.completedTodo }
            onChange={ () => this.handleCrossedOut() }
          />
          <span
            style={ { textDecoration: `${handleCompletedTodo(this.state.completedTodo)}` } }
          >
            {this.props.description}
          </span>
          <a
            className='delete-todo list-group-item-danger pull-right'
            style={ { marginRight: 10 } }
            onClick={ () => this.props.deleteItem(this.props.id) }
          >
            <span className='glyphicon glyphicon-trash' style={{backgroundColor: "black", color: "white", textAlign: "right"}}/>
          </a>

          <a
            className='edit-todo list-group-item-success pull-right'
            style={ { marginRight: 10 } }
            value={ this.state.toggleDisplay }
            onClick={ () => this.handleEditDisplay() }
          >
            <span className='glyphicon glyphicon-edit' style={{backgroundColor: "black", color: "white", textAlign: "right"}}/>
          </a>
        </li>

        {this.state.toggleDisplay ? (
          <div
            className={ `alert-${handlePriorityColor(this.state.priority)} clearfix` }
          >
            <div className='form-group col-md-10'>
              <label htmlFor='update-todo-text'>Edit your Todo Description</label>
              <textarea
                className='update-todo-text'
                name='description'
                type='string'
                value={ this.state.description }
                onChange={ this.handleTodoChange }
              />
            </div>

            <div className='form-group col-md-10'>
              <label htmlFor='update-todo-priority'>
                Select a new priority level
              </label>
              <select
                className='update-todo-priority'
                name='priority'
                value={ this.state.priority }
                onChange={ this.handleTodoChange }
              >
                <option style={{fontStyle:'italic', fontSize:'10px'}}>Select a priority</option>
                <option value='1'>Low priority</option>
                <option value='2'>Medium priority</option>
                <option value='3'>High priority</option>
              </select>
            </div>

            <button
			  name='button'
			  style={{backgroundColor: "black", color: "white"}} 
			  className="update-todo"
              type='submit'
              onClick={ () => this.handleEditDisplay() }
            >
              SAVE
            </button>
          </div>
        ) : null}
    </div>
	  
    );
  }
}

export default ListItem;
