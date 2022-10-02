import styled from 'styled-components'

export const HomeContainer = styled.div`
    padding: 1.5rem;
`
export const Button = styled.button`
    margin-top: 2rem;
    padding: 0.2rem 5rem;
    cursor: pointer;

    background-color: var(--green-200);
    border: 0;
    border-radius: 8px;
    color: var(--veryDarkBlue);

    &:hover {
        background-color: var(--green-100);
    }

    @media screen and (min-width: 768px) {
        padding: 0.2rem 6.5rem;
    }

    @media screen and (min-width: 1440px) {
        padding: 0.2rem 8rem;
    }
`