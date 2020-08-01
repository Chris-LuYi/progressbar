import React, { useEffect } from 'react'
import { withStyles, CssBaseline } from '@material-ui/core'

import { setupWorker } from 'msw'
import { handlers } from '@test/mock/handlers'
import logo from './logo.svg'
import * as bb from '@utils/a'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import Bar from './Bar'
import Login from './Login'
import ProgressBar from './ProgressBar'

import { MuiThemeProvider } from '@material-ui/core/styles'
import { defaultTheme } from './theme'
import style from './theme/mainStyle'
if (process.env.NODE_ENV === 'development') {
  console.log(handlers)
  const worker = setupWorker(...handlers)
  console.log(worker)
  worker.start()
  // worker.resetHandlers()
  worker.use(
    rest.post('/api/login', (req, res, ctx) => {
      // console.log({ req, res, ctx })
      return res(
        ctx.status(500),
        ctx.json({ message: 'Internal server error 123' }),
      )
    }),
  )
}

//define default state
const DataContext = React.createContext({
  processbar: {
    buttons: [],
    bars: [],
    limit: undefined,
  },
  ///...others
})

function App ({}) {
  useEffect(() => {}, [])
  return (
    <React.Fragment>
      <MuiThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <div>
          {/* <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
          <Bar>test</Bar>
          <Login />
        </header> */}
          <ProgressBar />
        </div>
      </MuiThemeProvider>
    </React.Fragment>
  )
}

export default App
