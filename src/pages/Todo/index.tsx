import { TodoContainer, InputContainer, TaskContainer, ButtonIcon } from './styles'
import { Trash } from 'phosphor-react'

export function Todo() {
    return(
        <TodoContainer>
            <h1>To do list</h1>

            <InputContainer>
                <input type="text" placeholder="Qual atividade?" />
                <button>Criar</button>
            </InputContainer>

            <TaskContainer>
                Tarefa 1
                <ButtonIcon>
                    <Trash size={18}/>
                </ButtonIcon>
                
            </TaskContainer>

            <TaskContainer>
                Tarefa 2
            </TaskContainer>

            <TaskContainer>
                Tarefa 3
            </TaskContainer>
        </TodoContainer>
        
    )
}