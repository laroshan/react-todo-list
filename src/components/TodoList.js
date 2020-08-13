import React, { Component } from 'react'
import TodoItem from './TodoItem';

export default class TodoList extends Component {
   
    render() {
        const {items,clearlist,handleDelete,handleEdit}=this.props;
        return (
                <ul class="list-group my-5">
                    <h3 className="text-capitalize text-center">
                        Todo List
                    </h3>
                        {
                            items.map(item=>{
                              return(
                                  <TodoItem
                                  key={item.id}
                                  title={item.title}
                                  handleDelete={()=>handleDelete(item.id)}
                                  handleEdit={()=>handleEdit(item.id)}
                                  />

                                  
                              );  
                            })
                        }
                        <button type="button" className="btn btn-danger btn-block
                        text-uppercase mt-5" onClick={clearlist}>
                            clear list
                        </button>

                </ul>
        )
    }
}
