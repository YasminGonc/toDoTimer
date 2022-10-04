import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from 'react'

import SoundAlert from '../assets/sounds/mixkit-happy-bells-notification.wav'
import { ActionTypes, Cycles, cyclesReducer } from '../reducers/cycles';

export interface NewCycleFormData {
    task: string;
    minutesAmount: number;
}

interface CyclesContextTypes {
    cycles: Cycles[];
    activeCycle: Cycles | undefined;
    amountsSecondsPassed: number;
    createNewCycle: (data: NewCycleFormData) => void;
    setSecondsPast: (seconds: number) => void;
    interruptCycle: () => void;
    markCycleAsCompleted: () => void;
}

export const CyclesContext = createContext({} as CyclesContextTypes)

interface CyclesContextProviderProps {
    children: ReactNode;
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
    const [cyclesState, dispatch] = useReducer(cyclesReducer, {
        cycles: [],
        activeCycleId: null,
    }, () => {
        const storageStateJSON = localStorage.getItem('@toDoTimer:cycles');

        if (storageStateJSON) {
            return JSON.parse(storageStateJSON);
        }
        else {
            return {
                cycles: [],
                activeCycleId: null,
            }
        }
    });

    const [amountsSecondsPassed, setAmountsSecondsPassed] = useState(0);

    const { cycles, activeCycleId } = cyclesState;

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

    const alertSound = new Audio(SoundAlert);

    function setSecondsPast(seconds: number) {
        setAmountsSecondsPassed(seconds);
    }

    function createNewCycle(data: NewCycleFormData) {
        const id = String(new Date().getTime());

        const newCycle: Cycles = {
            id: id,
            task: data.task,
            minutesAmount: data.minutesAmount,
            startDate: new Date(),
        }

        dispatch({
            type: ActionTypes.ADD_NEW_CYCLE,
            payload: {
                newCycle
            },
        });

        setAmountsSecondsPassed(0);
    }

    function interruptCycle() {
        dispatch({
            type: ActionTypes.INTERRUPT_CYCLE,
            payload: {
                activeCycleId,
            },
        });

        document.title = 'To Do Timer'
    }

    function markCycleAsCompleted() {
        dispatch({
            type: ActionTypes.MARK_CYCLE_AS_COMPLETED,
            payload: {
                activeCycleId,
            },
        });

        document.title = 'To Do Timer'

        alertSound.play();
    }

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState);

        localStorage.setItem('@toDoTimer:cycles', stateJSON);
    }, [cyclesState]);

    return (
        <CyclesContext.Provider value={{ cycles, activeCycle, amountsSecondsPassed, createNewCycle, setSecondsPast, interruptCycle, markCycleAsCompleted }}>
            {children}
        </CyclesContext.Provider>

    )
}