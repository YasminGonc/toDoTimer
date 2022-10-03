import { HistoryContainer, TableContainer } from './styles'

import { useContext } from 'react'
import { CyclesContext } from '../../context/CyclesContext'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/esm/locale'

export function History() {
    const { cycles } = useContext(CyclesContext)
    
    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>
            <TableContainer>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map((cycle) => {
                            return(
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.minutesAmount} minutos</td>
                                    <td>
                                        {formatDistanceToNow(new Date(cycle.startDate), {
                                            addSuffix: true,
                                            locale: ptBR,
                                        })}
                                    </td>

                                    {cycle.finishedDate && (<td>Concluído</td>)}
                                    {cycle.interruptedDate && (<td>Interrompido</td>)}
                                    {!cycle.finishedDate && !cycle.interruptedDate && (<td>Em andamento</td>)}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </TableContainer>
        </HistoryContainer>
    )
}