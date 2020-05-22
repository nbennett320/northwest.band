import React, { Component } from 'react'
import { 
  Badge,
  IconButton 
} from '@material-ui/core'
import { 
  createMuiTheme, 
  ThemeProvider,
  withStyles
} from '@material-ui/core/styles'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export default class CartButton extends Component {
  render() {
    const { cart } = this.props
    const StyledBadge = withStyles((theme) => styles.mui.withStyles(theme))(Badge)
    const theme = createMuiTheme(styles.mui.theme)
    return (
      <div style={styles.main}>
        <ThemeProvider theme={theme}>
          <IconButton aria-label="view your cart" color="primary">
            <StyledBadge badgeContent={cart.length} color="primary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </ThemeProvider>
      </div>
    )
  }
}

const styles = {
  main: {
    position: 'absolute',
    top: '2vh',
    right: '40px'
  },

  mui: {
    withStyles: theme => ({
      badge: {
        right: -3,
        top: 13,
        border: `2px solid rgba(255,255,255,0.8)`,
        padding: '0 4px',
      }
    }),

    theme: {
      palette: {
        primary: {
          main: '#000',
          contrastText: '#fff'
        },
        secondary: {
          main: '#fec0d3',
        },
      },
    }
  }
}