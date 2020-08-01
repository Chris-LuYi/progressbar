import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import color from 'color'

import primaryColor from '@material-ui/core/colors/indigo'
import secondaryColor from '@material-ui/core/colors/blueGrey'

export const defaultTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: '#ccc',
          overflowX: 'hidden',
          maxWidth: 1280,
          margin: '0 auto',
        },
      },
    },
  },
})
