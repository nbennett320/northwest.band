import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ColorOptions extends Component {
  isSelected = (el) => {
    const { selectedColor } = this.props.item
    return el === selectedColor
  }

  render() {
    const { 
      item,
      colors, 
      model,
      match
    } = this.props
    console.log("color options: ", this.props)
    return (
      <span style={styles.main}>
        {colors.map((color, i) => (
          <Link to={`/products/${model}/${color}`}>
            <img key={i}
              src={require(`../../img/merch/500/${item.image}${color}.jpg`)}
              alt={`${color} ${model}`}
              onMouseEnter={() => this.props.setColor(color)}
              onMouseLeave={() => this.props.setColor(match.params.color)}
              style={{
                ...styles.image,
                ...this.isSelected(color)
                  ? styles.selected
                  : {}
              }}
            />
          </Link>
        ))}
      </span>
    )
  }
}

const styles = {
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '80%',
    margin: '0 10%',
    padding: '10px 0'
  },

  image: {
    height: '50px',
    width: '50px',
    cursor: 'pointer',
  },

  selected: {
    filter: 'brightness(1.075)'
  }
}