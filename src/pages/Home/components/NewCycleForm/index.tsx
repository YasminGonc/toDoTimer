import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'
import { TodoContext } from '../../../../context/TodoContext';

export function NewCycleForm() {
    const { register } = useFormContext();
    const { activeCycle } = useContext(CyclesContext);
    const { todos } = useContext(TodoContext);

    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput 
                type="text" 
                id="task" 
                list="task-suggestions"
                placeholder="Nome do projeto"
                disabled={!!activeCycle}
                {...register('task')} 
            />

            <datalist id='task-suggestions'>
                {todos.map(todo => {
                    if (todo.checked == undefined) {
                        return(
                            <option key={todo.id} value={todo.todo}/>
                        )
                    }
                })}
            </datalist>

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput 
                type="number" 
                id="minutesAmount" 
                placeholder="00"
                disabled={!!activeCycle}
                {...register('minutesAmount', {valueAsNumber: true})} 
            />
            <span>minutos</span>

        </FormContainer>
    )
}