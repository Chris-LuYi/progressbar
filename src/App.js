import React from 'react'
import { CssBaseline } from '@material-ui/core'

import ProgressBarPage from '@pages/ProgressBar'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { defaultTheme } from './theme'
function App () {
  return (
    <React.Fragment>
      <MuiThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <ProgressBarPage />
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default App
