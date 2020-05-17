import React, { Component } from 'react'
import Image from './Image'
import ColorOptions from './ColorOptions'

export default class ImagePreview extends Component {
  render() {
    const { 
      item, 
      model, 
      match 
    } = this.props
    return (
      <div style={styles.main}>
        {item && <Image 
          path={require(`../../img/merch/500/${item.image}${item.selectedColor}.jpg`)}
          alt={item.description}
        />}
        {item && <ColorOptions 
          item={item}
          colors={item.attributes.colors}
          model={model}
          setColor={this.props.setColor}
          match={match}
        />}
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