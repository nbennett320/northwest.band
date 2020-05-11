import React, { Component } from 'react'
import ImagePreview from './ImagePreview'
import ProductOptions from './ProductOptions'

export default class ProductOverview extends Component {
  render() {
    const { 
      item,
      device 
    } = this.props
    return (
      <div style={device.isMobile 
        ? styles.mobile.main 
        : styles.main.main
      }>
        <ImagePreview 
          item={item}
          style={device.isMobile 
            ? styles.mobile.box 
            : styles.main.box
          }
        />

        <ProductOptions 
          style={device.isMobile 
            ? styles.mobile.box 
            : styles.main.box
          }
        />
      </div>
    )
  }
}

const styles = {
  main: {
    main: {
      display: 'flex',
      flexDirection: 'row',
    },

    box: {
      width: '50%',
    }
  },

  mobile: {
    main: {
      display: 'flex',
      flexDirection: 'column',
    },

    box: {
      width: '100%',
    }
  }
}