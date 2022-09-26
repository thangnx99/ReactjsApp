import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import { toast } from 'react-toastify';
import Color from "../HOC/Color";
class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: "Doing homework" },
            { id: 'todo2', title: "Making project" },
            { id: 'todo3', title: "Fixing bugs" },
        ],
        editTodo: {}
    }
    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, (todo)]
        })

        toast.success("Wow so easy!")
    }

    handleDeleteTodo = (todo) => {
        let currenJobs = this.state.listTodos;
        currenJobs = currenJobs.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: currenJobs
        })
        toast.success("Delete success!")
    }
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmtyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmtyObj === false && editTodo.id === todo.id) {

            let listTodosCopy = [...listTodos];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update todo success!")
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })

    }
    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy

        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmtyObj = Object.keys(editTodo).length === 0;

        return (
            <>
                <p>
                    Simple TODO Apps with React.js
                </p>
                <div className="list-todo-container">
                    <AddTodo
                        addNewTodo={this.addNewTodo} />
                    <div className="list-todo-container">
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmtyObj === true ?
                                            <span>{index + 1} - {item.title}</span>
                                            : <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnchangeEditTodo(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>
                                        }
                                        <button className="edit"
                                            onClick={() => this.handleEditTodo(item)}
                                        >
                                            {isEmtyObj === false && editTodo.id === item.id ?
                                                'Save' : 'Edit'
                                            }

                                        </button>
                                        <button className="delete"
                                            onClick={() => this.handleDeleteTodo(item)}
                                        >Delete</button>
                                    </div>
                                )
                            })

                        }

                    </div>
                </div>
            </>
        )

    }

}


export default Color(ListTodo);