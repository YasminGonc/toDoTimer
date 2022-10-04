export interface Cycles {
    id: string;
    task: string;
    minutesAmount: number;
    startDate: Date;
    interruptedDate?: Date;
    finishedDate?: Date;
}

interface CyclesState {
    cycles: Cycles[];
    activeCycleId: string | null;
}

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
    MARK_CYCLE_AS_COMPLETED = 'MARK_CYCLE_AS_COMPLETED',
}

export function cyclesReducer(state: CyclesState, action: any) {
    if (action.type == ActionTypes.ADD_NEW_CYCLE) {
        return {
            ...state,
            cycles: [...state.cycles, action.payload.newCycle],
            activeCycleId: action.payload.newCycle.id,
        }
    }

    if (action.type == ActionTypes.INTERRUPT_CYCLE) {
        return {
            ...state,
            cycles: state.cycles.map(cycle => {
                if (cycle.id == state.activeCycleId) {
                    return { ...cycle, interruptedDate: new Date() }
                }
                else {
                    return cycle
                }
            }),
            activeCycleId: null,
        }
    }

    if (action.type == ActionTypes.MARK_CYCLE_AS_COMPLETED) {
        return {
            ...state,
            cycles: state.cycles.map(cycle => {
                if (cycle.id == state.activeCycleId) {
                    return { ...cycle, finishedDate: new Date() }
                }
                else {
                    return cycle
                }
            }),
            activeCycleId: null,
        }
    }

    return state;
}