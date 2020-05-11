import React, { Component } from 'react'

export default class ColorOptions extends Component {
  isSelected = (el, model) => (
    el.attributes.model === model
  )

  render() {
    const { colors, model } = this.props
    return (
      <span style={styles.main}>
        {colors.map((el, i) => (
          <img key={i}
            //src={}
            //alt={}
            style={{
              ...styles.image,
              ...this.isSelected(el, model)
                ? styles.selected
                : {}
            }}
          />
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