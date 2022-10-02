import { ClipboardText, ClockCounterClockwise, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderContainer } from './styles'

export function Header() {
    return (
        <HeaderContainer>
            <nav>
                <NavLink to='/' title='Timer' end>
                    <Timer size={24}/>
                </NavLink>
                
                <NavLink to='/todo' title='To Do list'>
                    <ClipboardText size={24}/>
                </NavLink>

                <NavLink to='/history' title='Histórico'>
                    <ClockCounterClockwise size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}