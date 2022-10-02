import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
    return (
        <FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <TaskInput type="text" id="task" placeholder="Nome do projeto" />

            <label htmlFor="minutesAmount">durante</label>
            <MinutesAmountInput type="number" id="minutesAmount" placeholder="00" />
            <span>minutos</span>
        </FormContainer>
    )
}