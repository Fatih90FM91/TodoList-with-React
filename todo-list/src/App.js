import React , {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AddToDo from './components/AddToDo';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import axios from 'axios';
import About from './components/pages/About';
// import uuid from 'uuid';


const todos = []


class App extends  Component  {
 constructor(props) {
super(props);

this.state = {

  todos,
}


 }

 componentDidMount() {
axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
.then(res => this.setState({todos:res.data}))
 }

  // Delete Todo
  delTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );
  };

  
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
    //  console.log(title);
    //  const newTodo ={
    //    id:4,
    //    title,
    //    completed:false
    //  };
axios.post('https://jsonplaceholder.typicode.com/todos?_limit=10' ,{
  title,
  completed:false
})
.then(res =>this.setState({todos:[...this.state.todos,res.data]}))

    //  


    }

  
  


  render() {
  // console.log(this.state.todos);
  return (
  
    <Router>
    
  <div className='App'>
  <Header/>
  
    <Route exact path='/' render={props => (
        <React.Fragment>
           <AddToDo addTodo={this.addTodo}/>
 
           <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>

        </React.Fragment>
    )}>

    </Route>

    <Route path='/about' component={About}></Route>

  

  </div>
  </Router>
 
  );
  }
}

export default App;
