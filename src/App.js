import React from "react";
import Todolist from "./component/Todolist";
import listdata from "./listdata";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      tododata: listdata
    };
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedtododata = prevState.tododata.map(listdata =>{
        if(listdata.id === id){
          listdata.completed =!listdata.completed
        }
        return listdata
      })
      return{
        tododata : updatedtododata
      }
    })
  }

  render() {
    const todoItems = this.state.tododata.map(listdata => (
      <Todolist
        key={listdata.id}
        listdata={listdata}
        handleChange={this.handleChange}
      />
    ));
    return <div className="todo-list">{todoItems}</div>;
  }
}

export default App;
