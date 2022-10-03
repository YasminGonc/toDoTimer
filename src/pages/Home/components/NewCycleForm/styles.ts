import styled from 'styled-components'

export const FormContainer = styled.div`
    color: var(--white);
    line-height: 1.8;
    //background-color: red;
`
const Input = styled.input`
    color: var(--white);
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid var(--grayishBlue);

    margin: 0 0.5rem;
    padding: 0 0.5rem;

    &::placeholder {
        color: var(--grayishBlue);
    }
`
export const TaskInput = styled(Input)``

export const MinutesAmountInput = styled(Input)`
   width: 2.5rem;

   &::-webkit-inner-spin-button {
        -webkit-appearance: none;
   }
`