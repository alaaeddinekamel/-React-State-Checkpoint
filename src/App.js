import React from 'react';
import './App.css';


class App extends React.Component{
  constructor(){
    super()
    this.state={
      tasks : [
        {title : "AK7 Driver", isDone : false, id: Math.random()},
        {title : "el CR7", isDone : false, id: Math.random()},
        {title : "Sarouuuuuuukh madeiiiira", isDone : false, id: Math.random()}
      ],
      liveText : ""
    }
  }
  addTask=()=>this.state.liveText ==='' ? alert('champs vide') : this.setState({tasks : [...this.state.tasks , {title : this.state.liveText, isDone : false , id: Math.random()}], liveText : ""})
  deleteTask=(a)=> this.setState({tasks : this.state.tasks.filter((el,i,t)=>el.id !== a)})
  switchDone=(a)=> this.setState({tasks : this.state.tasks.map((el,i,t)=>el.id === a ? {...el, isDone : !el.isDone} : el )})
  render(){
    return(
      <div className="container">
        <h1>ToDo List</h1>
    {
      this.state.tasks.map((task)=>
      <div className="todo-item" >
     <h3 className={task.isDone && 'ak7'}>{task.title}</h3> 
     <div className="todo-buttons" >
       {/* <button onClick={()=>this.switchDone(task.id)}>Done</button> */}
       <i class={task.isDone ? "fa-solid fa-circle-xmark fa-xl" : "fa-solid fa-check fa-xl"} onClick={()=>this.switchDone(task.id)}></i>
       <i class="fa-solid fa-trash fa-xl" onClick={()=>this.deleteTask(task.id)}></i>
     {/* <button className="delete" onClick={()=> this.deleteTask(task.id)}>Delete</button> */}
     </div>
     
    
        </div>)
    }
    <input value={this.state.liveText} type='text' onChange={(e)=>this.setState({liveText : e.target.value})}/>
    <button className="add-button" onClick={this.addTask}>Add</button>
    </div>
    )
  }
} 
export default App;
