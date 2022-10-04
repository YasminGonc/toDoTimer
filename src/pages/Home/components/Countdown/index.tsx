import { CountdownContainer } from './styles';

import { useContext, useEffect, useState } from 'react';
import { differenceInSeconds } from 'date-fns'
import { CyclesContext } from '../../../../context/CyclesContext';
import { TodoContext } from '../../../../context/TodoContext';
import { useFormContext } from 'react-hook-form';

export function Countdown() {
    const { reset } = useFormContext();
    
    const { activeCycle, amountsSecondsPassed, setSecondsPast, markCycleAsCompleted } = useContext(CyclesContext);

    const { updateTodoAsCompleted } = useContext(TodoContext);

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - amountsSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');

    useEffect(() => {
        let interval: number;

        if (activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate));

                if (secondsDifference >= totalSeconds) {
                    markCycleAsCompleted();
                    updateTodoAsCompleted(activeCycle.task);
                    setSecondsPast(totalSeconds);
                    clearInterval(interval);
                    reset();
                }
                else {
                    setSecondsPast(secondsDifference);
                }

            }, 1000);
        }

        return () => {
            clearInterval(interval);
        }
    }, [activeCycle, totalSeconds, markCycleAsCompleted]);

    useEffect(() => {
        if (activeCycle) {
            document.title=`${minutes} : ${seconds}`;
        }
    }, [activeCycle, minutes, seconds]);

    return (
        <CountdownContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <div>:</div>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CountdownContainer>
    )
}