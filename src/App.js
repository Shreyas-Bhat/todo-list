import React from 'react';
import Todo from "./todo";
import todoData from "./todoData";
import './style.css'

class App extends React.Component{
    constructor(){
        super()
        this.state={
            todos: todoData
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(id){
      this.setState(prevState=>{
          const updatedTodos= prevState.todos.map(todo=>{
              if(todo.id===id){
                return{
                    ...todo,
                    completed: !todo.completed
                }
              }
              return todo
          })
          return{
              todos: updatedTodos
          }
      })
    }

    render(){
        const todoDataComponent = this.state.todos.map(item => <Todo key={item.id} item={item} handleChange={this.handleChange}/>)
         
        return(
            <div className="todo-list">
            {todoDataComponent}
            </div>
        )
    }
        

}

export default App;