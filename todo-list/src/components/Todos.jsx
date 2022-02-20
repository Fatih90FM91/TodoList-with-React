import React ,{Component}  from "react";
import TodoItem from "./TodoItem";
import PropTypes from 'prop-types';




class Todos extends Component {

 render() {
        return (

<div>

       {this.props.todos.map(todo => (
          // <div key={todo.id}>
          
            <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} delTodo={this.props.delTodo} />
          // </div>
        ))}
 </div>
        )

       }
 
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
}

export default Todos;