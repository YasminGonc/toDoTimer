import styled from 'styled-components'

export const HomeContainer = styled.div`
    padding: 1.5rem;
`
export const ErrorContainer = styled.div`
    margin-top: 0.5rem;
    font-size: 0.75rem;
    color: var(--softRed);
`
const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    
    margin: 2rem auto 0 auto;
    padding: 0.2rem 5rem;
    cursor: pointer;

    border: 0;
    border-radius: 8px;
    color: var(--veryDarkBlue);

    &:disabled {
        background-color: var(--green-100);
        cursor: not-allowed;
    }

    @media screen and (min-width: 768px) {
        padding: 0.2rem 6.5rem;
    }

    @media screen and (min-width: 1440px) {
        padding: 0.2rem 8rem;
    }
`
export const StartButton = styled(Button)`
    background-color: var(--green-200);

    &:hover {
        background-color: var(--green-100);
    }
`
export const StopButton = styled(Button)`
    background-color: var(--softRed);
`