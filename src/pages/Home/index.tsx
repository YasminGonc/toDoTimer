import { Button, HomeContainer } from './styles'

import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'

//o useForm vai ser usado aqui pq meu form está aqui
// posso precisar do watch, reset e handleSubmit do Hook Form 

export function Home() {
    return (
        <HomeContainer>
            <form action="">
                <NewCycleForm />
                
                <Countdown />

                <Button type="submit">Começar</Button>

            </form>
        </HomeContainer>
    )
}