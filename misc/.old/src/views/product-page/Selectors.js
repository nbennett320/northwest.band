import React, { Component } from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'

export default class Selectors extends Component {
  handleChangeColor = (e, val) => {
    const { model } = this.props
    this.props.setColor(val.props.value)
    this.props.setURL(`/products/${model}/${val.props.value}`)
  }

  handleChangeSize = (e, val) => {
    this.props.setURL()
    this.props.setSize(val.props.value)
  }

  render() {
    const { item } = this.props
    return (
      <div style={styles.main}>
        {item.attributes.colors.length > 0 &&
          <div style={styles.form}>
            <FormControl variant="outlined"
              style={styles.selector}
            >
              <InputLabel> color </InputLabel>
              <Select
                value={item.selectedColor}
                onChange={this.handleChangeColor}
                label={"color"}
              >
                {item.attributes.colors.map((color, i) => (
                  <MenuItem 
                    value={color}
                    key={i}
                  >
                    {color}
                  </MenuItem>
                ))}
              </Select>  
            </FormControl>
          </div>
        }
        
        {item.attributes.sizes.length > 0 && 
          <div style={styles.form}>
            <FormControl variant="outlined" 
              style={styles.selector}
            >
              <InputLabel> size </InputLabel>
              <Select
                value={item.selectedSize}
                onChange={this.handleChangeSize}
                label={"color"}
              >
                {item.attributes.sizes.map((size, i) => (
                  <MenuItem 
                    value={size}
                    key={i}
                  >
                    {size}
                  </MenuItem>
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