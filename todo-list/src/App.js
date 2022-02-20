import React , {Component} from 'react';
import './App.css';
import AddToDo from './components/AddToDo';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import uuid from 'uuid';


const todos = [    {
  id: 1,
 title: 'Improve your self',
 completed:false

},
{
  id:2,
 title: 'learn more what you want',
 completed:false

},

{
  id:3,
 title: 'practice and practice',
 completed:false

}
]


class App extends  Component  {
 constructor(props) {
super(props);

this.state = {

  todos,
}


 }

 componentDidMount() {

 }
 delTodo = (id) =>{
  // console.log(id);
  this.setState({todos:[...this.state.todos.filter(todo => todo.id!==id)]});

}
  
//mark todo toggle complete

 markComplete = (id)=> {
  // console.log(id);
  this.setState({todos:this.state.todos.map((todo) =>{
    if(todo.id===id){
      todo.completed=!todo.completed
    }
    return todo;
  })})
    }

    addTodo = (title) => {
     console.log(title);
     const newTodo ={
       id:4,
       title,
       completed:false
     };
     this.setState({todos:[...this.state.todos,newTodo]})


    }

  
  


  render() {
  // console.log(this.state.todos);
  return (
  
    
  <div className='App'>
 <Header/>
 <AddToDo addTodo={this.addTodo}/>
 
  <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

  </div>

 
  );
  }
}

export default App;
