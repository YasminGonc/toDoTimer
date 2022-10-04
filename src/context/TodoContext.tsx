import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

interface Todo {
    id: string;
    todo: string;
    checked?: boolean;
}

export interface TaskData {
    todo: string;
}

interface TodoContextTypes {
    todos: Todo[];
    createNewTodo: (data: TaskData) => void;
    createNewTodoFromTimer: (task: string) => void;
    deleteTodo: (todoToDelete: string) => void;
    updateTodoAsCompleted: (taskCompleted: string) => void;
}

export const TodoContext = createContext({} as TodoContextTypes);

interface TodoContextProviderProps {
    children: ReactNode;
}

export function TodoContextProvider({ children }: TodoContextProviderProps) {
    const [todos, setTodos] = useState<Todo[]>(() => {
        const storageValue = localStorage.getItem('@toDoTimer:todos');

        if (storageValue) {
            return JSON.parse(storageValue);
        }
        else {
            return [];
        }
    });

    function createNewTodo(data: TaskData) {
        const id = String(new Date().getTime());

        const newTodo: Todo = {
            id: id,
            todo: data.todo
        }

        setTodos(state => [...state, newTodo]);
    }

    function createNewTodoFromTimer(task: string) {
        const newTodo: Todo = {
            id: String(new Date().getTime()),
            todo: task
        }

        setTodos(state => [...state, newTodo]);
    }

    function deleteTodo(todoToDelete: string) {
        const todoWithoutDeletedOne = todos.filter(todo => todo.id != todoToDelete);

        setTodos(todoWithoutDeletedOne);
    }

    function updateTodoAsCompleted(taskCompleted: string) {
        const completedTodos = todos.map(todo => {return todo.todo.toLowerCase() == taskCompleted.toLowerCase() ? {...todo, checked: todo.checked = true} : {...todo}});

        setTodos(completedTodos);
    }

    useEffect(() => {
        const todosJSON = JSON.stringify(todos);

        localStorage.setItem('@toDoTimer:todos', todosJSON);
    }, [todos]);
    
    return(
        <TodoContext.Provider value={{ todos, createNewTodo, createNewTodoFromTimer, deleteTodo, updateTodoAsCompleted }}>
            {children}
        </TodoContext.Provider>
    )
}