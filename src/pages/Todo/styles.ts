import styled from 'styled-components'

import * as Checkbox from '@radix-ui/react-checkbox'

export const TodoContainer = styled.div`
    height: 80vh;
    width: 80%;
    margin: 0 auto;

    color: var(--grayishBlue);

    overflow-y: scroll;

    ::-webkit-scrollbar {
        display: none;
    }

    @media screen and (min-width: 768px) {
        width: 60%;
    }

    @media screen and (min-width: 1024px) {
        width: 50%;
    }

    @media screen and (min-width: 1440px) {
        width: 40%;
    }
`
export const InputContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.5rem;

    margin: 1.5rem 0 2rem 0;

    input {
        flex: 1;
        background-color: var(--darkDesaturatedBlue);
        border: 0;
        border-radius: 8px;
        color: var(--white);

        padding: 0.5rem;

        &::placeholder {
            color: var(--grayishBlue);
        }
    }

    button {
        padding: 0.5rem;
        background-image: linear-gradient(135deg, #2374AB, #4DCCBD, #F16A8C);
        border-radius: 4px;
        border: 0;
        color: var(--white);
        cursor: pointer;
    }
`
interface TaskContainerProps {
    checked: boolean;
}

export const TaskContainer = styled.div<TaskContainerProps>`
    background-color: var(--darkDesaturatedBlue);
    border-radius: 8px;

    margin: 1rem 0;
    padding: 0.5rem;
    opacity: ${props => props.checked ? '0.6' : 'none'};
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};

    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const ButtonIcon = styled.button`
    background-color: transparent;
    border: 0;
    color: var(--grayishBlue);

    cursor: pointer;

    display: flex;
    align-items: center;

    &:hover {
        color: var(--softRed);
    }
`
export const ErrorContainer = styled.div`
    color: var(--softRed);
    font-size: 0.75rem;
    
    margin-top: -1rem;
`
export const CheckboxRoot = styled(Checkbox.Root)`
    width: 1.1rem;
    height: 1.1rem;

    border-radius: 50%;
    border: 0;
    background-color: var(--grayishBlue);
    
    display: flex;
    align-items: center;
    justify-content: center;
`
export const CheckboxIndicator = styled(Checkbox.Indicator)`
    display: flex;
    align-items: center;
    justify-content: center;

    color: var(--veryDarkBlue);
`
export const CheckContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem
`