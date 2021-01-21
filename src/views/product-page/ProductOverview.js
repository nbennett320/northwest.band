import React, { Component } from 'react'
import ImagePreview from './ImagePreview'
import ProductActions from './ProductActions'

export default class ProductOverview extends Component {
  render() {
    const { 
      item,
      model,
      match,
      device 
    } = this.props
    return (
      <div style={device.isMobile 
          ? styles.mobile.main 
          : styles.main.main
        }
      >
        <div style={device.isMobile 
            ? styles.mobile.box 
            : styles.main.box
          }
        >
          <ImagePreview 
            item={item}
            model={model}
            setColor={this.props.setColor}
            match={match}
          />
        </div>

        <div style={device.isMobile 
            ? styles.mobile.box 
            : styles.main.box
          }
        >
          <ProductActions 
            item={item}
            model={model}
            setColor={this.props.setColor}
            setSize={this.props.setSize}
            setUrl={this.props.setUrl}
            addItemToCart={this.props.addItemToCart}
            match={match}
            device={device}
          />
        </div>
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