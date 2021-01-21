import React from 'react'

const Image = props => {
  console.log(props.path)
  return (
    <img src={props.path}
      alt={`${props.alt}`}
      style={styles.image}
    />
  )
}

const styles = {
  image: {
    display: 'flex',
    height: '75%',
    width: '75%',
    margin: '0 auto'
  }
}

export default Image