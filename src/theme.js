import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

const palette = createMuiTheme({
  palette: {
    primary: {
      main: '#fec0d3'
    },
    secondary: {
      main: 'rgba(255,255,255,0.82)'
    },
    textPrimary: {
      main: 'rgba(255,255,255,0.82)'
    },
    textSecondary: {
      main: 'rgba(0,0,0,0.82)'
    }
  }
})

const theme = responsiveFontSizes(palette)

export default theme