import React, { Component } from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'

export default class Selectors extends Component {
  handleChangeColor = e => {
    const { model } = this.props
    this.props.setColor(e.target.value)
    this.props.setURL(`/products/${model}/${e.target.value}`)
  }

  handleChangeSize = e => {
    this.props.setURL()
    this.props.setSize(e.target.value)
  }

  render() {
    const { item } = this.props
    return (
      <div style={styles.main}>
        {item.attributes.colors.length > 0 &&
          <div style={styles.form}>
            <FormControl variant="outlined">
              <InputLabel> color </InputLabel>
              <Select
                native
                value={item.selectedColor}
                onChange={this.handleChangeColor}
                label={"color"}
                style={styles.selector}
              >
                {item.attributes.colors.map((color, i) => (
                  <option 
                    value={color}
                    key={i}
                  >
                    {color}
                  </option>
                ))}
              </Select>  
            </FormControl>
          </div>
        }
        
        {item.attributes.sizes.length > 0 && 
          <div style={styles.form}>
            <FormControl variant="outlined">
              <InputLabel> size </InputLabel>
              <Select
                native
                value={item.selectedSize}
                onChange={this.handleChangeSize}
                label={"size"}
                style={styles.selector}
              >
                {item.attributes.sizes.map((size, i) => (
                  <option 
                    value={size}
                    key={i}
                  >
                    {size}
                  </option>
                ))}
              </Select>
            </FormControl>
          </div>
        }
      </div>
    )
  }
}

const styles = {
  main: {
    padding: '20px 0',
    width: '33.333%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
  },

  form: {
    padding: '20px 0',
    margin: '0',
  },

  selector: {
    width: '100%'
  }
}