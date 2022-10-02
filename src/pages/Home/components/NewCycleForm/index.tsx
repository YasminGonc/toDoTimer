import { FormContainer, MinutesAmountInput, TaskInput } from './styles'

import { useFormContext } from 'react-hook-form'
import { useContext } from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {
    const { register } = useFormContext();
    const { activeCycle } = useContext(CyclesContext);

    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput 
                type="text" 
                id="task" 
                placeholder="Nome do projeto"
                disabled={!!activeCycle}
                {...register('task')} 
            />

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