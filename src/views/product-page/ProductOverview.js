import React from 'react'
import ImagePreview from './ImagePreview'
import ProductActions from './ProductActions'

const ProductOverview = props => {
  return (
    <div style={props.device.isMobile 
        ? styles.mobile.main 
        : styles.main.main
      }
    >
      <div style={props.device.isMobile 
          ? styles.mobile.box 
          : styles.main.box
        }
      >
        <ImagePreview 
          item={props.item}
          model={props.model}
          setColor={props.setColor}
          match={props.match}
        />
      </div>

      <div style={props.device.isMobile 
          ? styles.mobile.box 
          : styles.main.box
        }
      >
        <ProductActions 
          item={props.item}
          model={props.model}
          setColor={props.setColor}
          setSize={props.setSize}
          setUrl={props.setUrl}
          addItemToCart={props.addItemToCart}
          match={props.match}
          device={props.device}
        />
      </div>
    </div>
  )
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

export default ProductOverview