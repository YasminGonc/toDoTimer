import { createContext, ReactNode, useContext, useState } from 'react'

import SoundAlert from '../assets/sounds/mixkit-happy-bells-notification.wav'

interface Cycles {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

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
    const [cycles, setCycles] = useState<Cycles[]>([]);

    const [activeCycleId, setActiveCycleId] = useState<string | null>(null);

    const [amountsSecondsPassed, setAmountsSecondsPassed] = useState(0);

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

        setCycles(state => [...state, newCycle]);
        setActiveCycleId(id);
        setAmountsSecondsPassed(0);
    }

    function interruptCycle() {
        setCycles(state =>
            state.map(cycle => {
                if (cycle.id == activeCycleId) {
                    return { ...cycle, interruptedDate: new Date() }
                }
                else {
                    return cycle
                }
            })
        );

        setActiveCycleId(null);

        document.title = 'To Do Timer'
    }

    function markCycleAsCompleted() {
        setCycles(state =>
            state.map(cycle => {
                if (cycle.id == activeCycleId) {
                    return { ...cycle, finishedDate: new Date() }
                }
                else {
                    return cycle
                }
            })
        );

        setActiveCycleId(null);

        document.title = 'To Do Timer'

        alertSound.play();
    }

    return (
        <CyclesContext.Provider value={{ cycles, activeCycle, amountsSecondsPassed, createNewCycle, setSecondsPast, interruptCycle, markCycleAsCompleted }}>
            {children}
        </CyclesContext.Provider>

    )
}