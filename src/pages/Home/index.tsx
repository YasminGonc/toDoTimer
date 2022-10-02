import { ErrorContainer, HomeContainer, StartButton, StopButton } from './styles'

import { useForm, FormProvider } from 'react-hook-form'
import { useContext } from 'react'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Countdown } from './components/Countdown'
import { NewCycleForm } from './components/NewCycleForm'
import { CyclesContext, NewCycleFormData } from '../../context/CyclesContext'
import { HandPalm, Play } from 'phosphor-react'

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod
        .number()
        .max(60, 'O ciclo deve ser de no máximo 60 minutos')
        .min(1, 'O ciclo deve ser de no mínimo 5 minutos'),
});

export function Home() {
    const { activeCycle, createNewCycle, interruptCycle } = useContext(CyclesContext);

    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    const { handleSubmit, reset, watch, formState } = newCycleForm;

    function handleCreateNewCycle(data: NewCycleFormData) {
        createNewCycle(data);
        reset();
    }

    const task = watch('task');
    const isSubmitDisabled = !task;

    return (
        <HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>

                <ErrorContainer>
                    <p>{formState.errors.task?.message}</p>
                    <p>{formState.errors.minutesAmount?.message}</p>
                </ErrorContainer>
                
                <Countdown />

                { activeCycle ? (
                    <StopButton type="button" onClick={interruptCycle}>
                        <HandPalm />
                        Interromper
                    </StopButton>
                ) : (
                    <StartButton type="submit" disabled={isSubmitDisabled}>
                        <Play />
                        Começar
                    </StartButton>
                )}

            </form>
        </HomeContainer>
    )
}