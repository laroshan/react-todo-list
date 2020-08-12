import React, { Component } from 'react';
import {v4 as uuid} from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';


class App extends Component{
  state={
    items:[
      {id:1,title: "wakeup"},
      {id:2,title: "make it"}
    ],
    id: uuid(),
    item:'',
    editItem: false
  };
  handleChange=(e)=>{
    console.log('handle change');
  }
  handleSubmit=(e)=>{
    console.log('handle submit');
  }
  clearlist=()=>{
    console.log("clear list");
  }
  handleDelete=(id)=>{
    console.log(`handle delete ${id}`);
  }
  handleEdit=(id)=>{
    console.log(`handle edit ${id}`);
  }


  render(){
    return(
          <div class="container">
            <div class="row">
            <div className="col-10 mx-auto col-md-8 mt-4 ">
              <h3 className="text-capitalize text-center">
                Todo Input
              </h3>
              <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
              />
            <TodoList
            items={this.state.items}
            clearlist={this.clearlist}
            handleDelete={this.handleDelete}
            handleEdit={this.handleEdit}
            />
            </div>

            </div> 
          </div>           
    );
  }
}

export default App;
