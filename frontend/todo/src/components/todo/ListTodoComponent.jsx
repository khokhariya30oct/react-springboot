import React, { Component } from 'react'

class ListTodoComponent extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            todos : [
                {
                    id : 1,
                    desc : 'Todo1',
                    done : false,
                    targetDate : new Date()
                },
                {
                    id : 2,
                    desc : 'Todo2',
                    done : false,
                    targetDate : new Date()
                }
            ]
        }
    }
    
    render () {
        return (
            <div>
                <h1>Todo List</h1>
                 <table>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Desc</th>
                        <th>Done</th>
                        <th>Target Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {                        
                        this.state.todos.map((todo,index) => 
                            <tr key={index}>
                                <td>{todo.id}</td>
                                <td>{todo.desc}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>   
            </div>
        )
    }
}

export default ListTodoComponent