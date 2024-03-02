import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || []);
}

export const useTodo = () => {

    
    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);


    const handleNewTodo = (newTodo) => {
        const action = {
            type: "ADD_TODO",
            payload: newTodo,
        };
        dispatchTodo(action);
    }

    const handleDeleteTodo = (id) => {
        console.log("the todo id", id);
        const action = {
            type: "REMOVE_TODO",
            payload: id,
        };
        dispatchTodo(action);
    }

    const handleToggleTodo = (id) => {
        console.log(id, "toggle");
        const action = {
            type: "TOGGLE_TODO",
            payload: id,
        };
        dispatchTodo(action);
    }

    return {
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        todos,
        todosCount: todos.length, 
    }
}
