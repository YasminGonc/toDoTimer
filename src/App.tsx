import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './context/CyclesContext';
import { TodoContextProvider } from './context/TodoContext';
import { Router } from './Router';

import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <>
      <BrowserRouter>
      
        <CyclesContextProvider>
          
          <TodoContextProvider>
            <Router />
          </TodoContextProvider>
  
        </CyclesContextProvider>
      
      </BrowserRouter>
    
      <GlobalStyle />
    </>

  )
}