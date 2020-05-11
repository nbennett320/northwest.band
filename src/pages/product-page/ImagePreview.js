import React, { Component } from 'react'
import Image from './Image'
import ColorOptions from './ColorOptions'

export default class ImagePreview extends Component {
  render() {
    const { item } = this.props
    return (
      <div style={styles.main}>
        {item && <Image 
          path={require(`../../img/merch/500/${item.image}${item.selectedColor}.jpg`)}
          alt={item.description}
        />}
        {/* <ColorOptions /> */}
      </div>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column'
  }
}