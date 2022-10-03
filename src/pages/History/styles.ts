import styled from 'styled-components'

export const HistoryContainer = styled.div`
    //background-color: red;
    height: 80vh;
    width: 80%;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        color: var(--grayishBlue);
    }
`
export const TableContainer = styled.div`
    flex: 1;
    overflow: auto;
    margin-top: 2rem;

    table {
        width: 100%;
        border-collapse: collapse;
        min-width: 600px;
        font-size: 0.875rem;
        color: var(--grayishBlue);

        th {
            background-color: var(--darkDesaturatedBlue);
            border-bottom: 2px solid var(--darkBlue);
            padding: 0.5rem;
            color: var(--grayishBlue);
            font-size: 1rem;

            &:first-child {
                border-top-left-radius: 8px;
            }

            &:last-child {
                border-top-right-radius: 8px;
            }
        }

        tr {
            background-color: var(--darkDesaturatedBlue);
            
            td {
                padding: 0.5rem;
            }

            &:last-child {
                td:first-child {
                    border-bottom-left-radius: 8px;
                }

                td:last-child {
                    border-bottom-right-radius: 8px;
                }
            }
        }
    }
`