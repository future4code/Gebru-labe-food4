import React from 'react'

import { Router } from '../Routes/routes'
import { GlobalStyle } from '../GlobalStyle'
import { ThemeProvider } from '@mui/material/styles'
import theme from "../constants/theme"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
      <Router />
      </ThemeProvider>
    
    </>
  )
}

export default App