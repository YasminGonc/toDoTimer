import { TodoContainer, InputContainer, TaskContainer, ButtonIcon, ErrorContainer, CheckboxRoot, CheckboxIndicator, CheckContainer } from './styles'

import { Check, Trash } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TaskData, TodoContext } from '../../context/TodoContext'
import { useContext } from 'react'

const newTaskFormValidationSchema = zod.object({
    todo: zod.string().min(1, 'Informe a tarefa')
});

export function Todo() {
    const { todos, createNewTodo, deleteTodo } = useContext(TodoContext);

    const newTask = useForm<TaskData>({
        resolver: zodResolver(newTaskFormValidationSchema),
        defaultValues: {
            todo: ''
        }
    });

    const { register, formState, handleSubmit, reset } = newTask;

    function handleCreateNewTodo(data: TaskData) {
        createNewTodo(data);
        reset();
    }

    return (
        <TodoContainer>
            <h1>To do list</h1>

            <InputContainer onSubmit={handleSubmit(handleCreateNewTodo)}>
                <input type="text" placeholder="Qual atividade?" {...register('todo')} />
                <button type='submit'>Criar</button>
            </InputContainer>

            <ErrorContainer>
                <p>{formState.errors.todo?.message}</p>
            </ErrorContainer>

            {todos.map(todo => {
                return (
                    <TaskContainer key={todo.id} checked={todo.checked ? true : false}>
                        <CheckContainer>
                            <CheckboxRoot disabled checked={todo.checked ? true : false}>
                                <CheckboxIndicator id={todo.id}>
                                    <Check size={16} />
                                </CheckboxIndicator>
                            </CheckboxRoot>
                            <label htmlFor={todo.id}>{todo.todo}</label>
                        </CheckContainer>
                        
                        <ButtonIcon onClick={() => deleteTodo(todo.id)}>
                            <Trash size={18} />
                        </ButtonIcon>
                    </TaskContainer>
                )
            })}
    
        </TodoContainer>
    )
}