import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {

   return {
        backgroundColor:'#f4f4f4',
        textDecoration:this.props.todo.completed ? 'line-through' : 'none',
        padding:'10px',
        borderBottom:'1px #ccc dotted'


   }
    }


  render() {
      const {id ,title} =this.props.todo;
    return (
      <div style={this.getStyle()}>
        
              <p>
              <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} />{'   '}
              {title}{'   '}
              <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>done</button>
              </p>
      </div>
    )
  }
}

//PropTypes
TodoItem.propTypes ={
    todo:PropTypes.array.isRequired
  }

  const  btnStyle ={
      background :'#FE7E6D',
      color:'#fff',
      padding:'5x,9px',

  }
export default TodoItem