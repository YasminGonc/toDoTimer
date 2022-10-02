import styled from 'styled-components'

export const CountdownContainer = styled.div`
    margin-top: 2rem;
    padding: 1rem 0;

    font-size: 3rem;
    color: var(--softRed);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    span {
        width: 3.5rem;
        background-color: var(--darkDesaturatedBlue);
        padding: 0 0.5rem;
        border-radius: 8px;
    }

    @media screen and (min-width: 768px) {
        font-size: 4rem;
    }

    @media screen and (min-width: 1440px) {
        font-size: 5rem;

        span {
            width: 5rem;
        }
    }
`