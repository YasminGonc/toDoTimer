import { BrowserRouter } from 'react-router-dom'
import { CyclesContextProvider } from './context/CyclesContext';
import { Router } from './Router';

import { GlobalStyle } from "./styles/global";

export function App() {

  return (
    <>
      <BrowserRouter>
      
        <CyclesContextProvider>
          <Router />
        </CyclesContextProvider>
      
      </BrowserRouter>
    
      <GlobalStyle />
    </>

  )
}