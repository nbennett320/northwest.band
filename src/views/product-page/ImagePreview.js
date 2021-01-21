import React from 'react'
import Image from './Image'
import ColorOptions from './ColorOptions'

const ImagePreview = props => {
  const selectedColor = props.item.selectedColor 
    ? props.item?.selectedColor
    : props.item.attributes.colors[0]
  return (
    <div style={styles.main}>
      <Image 
        path={require(`../../assets/img/merch/500/${props.item.image}${selectedColor}.jpg`)}
        alt={props.item.description}
      />
      <ColorOptions 
        item={props.item}
        colors={props.item.attributes.colors}
        model={props.model}
        setColor={props.setColor}
        match={props.match}
      />
    </div>
  )
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'column'
  }
}

export default ImagePreview