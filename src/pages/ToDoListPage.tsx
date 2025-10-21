import {Header} from "../components/Header/Header";
import {Form} from "../components/Form/Form";
import {ToDoList} from "../components/ToDoList/ToDoList";
import {ToDo} from "../models/todo-item";
import {useState} from "react";

export const ToDoListPage = () => {
    // useState Это  хранилище состояния, может хранить в себе лбые параметры, также дополнительно можно указывать типизацию в <>
    const [todos, setTodos] = useState<ToDo[]>([])

    const createNewToDo = (text:string) => {
        const newToDo: ToDo = {
            id: todos.length,
            text: text,
            isDone: false,
        }
        // Передаем в массив todos новый todo
        setTodos([...todos, newToDo])
    }



    const updateToDo = (toDoItem: ToDo) => {
        const newTodos = todos.map((todo) => {
            if (todo.id === toDoItem.id){
                todo.isDone = !todo.isDone
            }
            return todo
        })
        setTodos(newTodos)
    }

    const deleteToDo = (toDoItem: ToDo) => {
        const newTodos = todos.filter((todo) => todo.id !== toDoItem.id)
        setTodos(newTodos)
    }


    return (
        <>
            <Header />
            <Form createNewTodo={createNewToDo} />
            <ToDoList todos={todos} updateToDo={updateToDo} deleteToDo={deleteToDo}/>
        </>
    )
}