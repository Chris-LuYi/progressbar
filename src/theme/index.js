import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

import primaryColor from '@material-ui/core/colors/blueGrey'

export const defaultTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: primaryColor,
    },
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
  }),
)
