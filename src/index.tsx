import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/scss/normalize.scss';
import './assets/scss/style.scss';
import {ToDoListPage} from "./pages/ToDoListPage";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {ToDo} from "./models/todo-item";
import {NotFound} from "./pages/404";
import {ItemDescription} from "./pages/ItemDescription";
import {Layouts} from "./layouts/Layouts";

const todos: ToDo[] = [
    {
        id: 0,
        text: 'Первое действие',
        isDone: true,
    },
    {
        id: 1,
        text: 'Второе действие',
        isDone: false,
    },
    {
        id: 2,
        text: 'Третье действие',
        isDone: false,
    },
    {
        id: 3,
        text: 'Четвертое действие',
        isDone: true,
    },
]

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layouts />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <HomePage todos={todos}/>,
            },{
                path: '/todo',
                element: <ToDoListPage/>,
            },{
                path: '/list/:id',
                element: <ItemDescription todos={todos}/>,
            }
        ]
    },{
        path: '*',
        element: <NotFound />,
    }
    ], {basename: '/app/'})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);
