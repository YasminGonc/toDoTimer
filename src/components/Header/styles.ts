import styled from "styled-components";

export const HeaderContainer = styled.div`
    //background-color: var(--grayishBlue);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 1rem;

    nav {
        display: flex;
        gap: 2rem;

        a {
            color: var(--white);

            &:hover {
                color: var(--softRed);
            }

            &.active {
                color: var(--softRed);
            }
        }
    }

    @media screen and (min-width: 1024px) {
        nav {
            gap: 4rem;
        }
    }

`