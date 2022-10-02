import { HistoryContainer, TableContainer } from './styles'

export function History() {
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
                        <tr>
                            <td>Tarefa1</td>
                            <td>25 minutos</td>
                            <td>Há 1 hora</td>
                            <td>Completa</td>
                        </tr>
                        <tr>
                            <td>Tarefa1</td>
                            <td>25 minutos</td>
                            <td>Há 1 hora</td>
                            <td>Completa</td>
                        </tr>
                    </tbody>
                </table>
            </TableContainer>
        </HistoryContainer>
    )
}