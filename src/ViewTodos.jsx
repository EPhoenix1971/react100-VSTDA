import React from 'react';
import ListItem from './ListItem';

const ViewTodos = (props) => {
  return (
    <div className='col-md-8'>
      <hr/>
	  <hr/>
	  <label htmlFor='view-todo-text'>View Todo List Here</label>
	  <div className='card' >
		  
        <ul className='list-group' style={{listStyleType: "none"}}>
		
		  <h5 style={{fontStyle:'italic', fontSize:'10px'}}>
			  Check the box when your Todo is complete
		  </h5>
		  <h5 style={{fontStyle:'italic', fontSize:'10px'}}>
			  Click button to edit or delete each Todo
		  </h5>
          {props.todoItems.map((newTodoItems) => {
            return (
				
              <ListItem
                key={ newTodoItems.id }
                id={ newTodoItems.id }
                description={ newTodoItems.description }
                priority={ newTodoItems.priority }
                saveItem={ props.saveItem }
                deleteItem={ props.deleteItem }
                handleEditDisplay={ props.handleEditDisplay }
              />
			 
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ViewTodos;
