import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layout/DefaultLayout'
import { History } from './pages/History'
import { Home } from './pages/Home'
import { Todo } from './pages/Todo'

export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />

                <Route path='/history' element={<History />} />

                <Route path='todo' element={<Todo />} />
            </Route>
        </Routes>
    )
}