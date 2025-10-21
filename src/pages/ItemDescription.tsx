import {ToDo} from "../models/todo-item";
import {useEffect, useState} from "react";
import { useNavigate, useParams} from "react-router-dom";


interface ComponentProps {
    todos: ToDo[]
}

export const ItemDescription = ({ todos }: ComponentProps) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState<ToDo>();

    useEffect(() => {
        const serchTodo = todos.find((todo) => String(todo.id) === id)
        if (serchTodo){
            setTodo(serchTodo);
        } else {
            navigate('/404')
        }
    }, [todos, id, navigate])

    return (
        <div className="container">
            <h1>{todo?.text}</h1>
        </div>
    )

}