import React from 'react'
import { Typography } from '@material-ui/core'

const Title = props => {
  return (
    <div style={{
      ...props.device.isMobile 
        ? styles.mobile.title
        : styles.main.title
    }}>
      <Typography variant="h2">
        {props.item.title}
      </Typography>
      
      <Typography variant="h5">
        ${props.item.price}
      </Typography>
    </div>
  )
}

const styles = {
  main: {
    title: {
      padding: '40px 0',
      margin: '0 auto'
    }
  },
  mobile: {
    title: {
      padding: '40px 50px',
      margin: '0 auto'
    }
  }
}

export default Title