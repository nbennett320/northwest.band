import React from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const ProductSelectors = props => {
  const { item } = props
  const classes = useStyles()

  const handleChangeColor = (e) => {
    props.setColor(e.target.value)
    props.setUrl(`/products/${props.model}/${e.target.value}`)
  }

  const handleChangeSize = (_, val) => {
    props.setUrl()
    props.setSize(val.props.value)
  }

  return (
    <div className={classes.main}>
      {item.attributes?.colors.length > 0 &&
        <div className={classes.form}>
          <FormControl 
            variant="outlined"
            className={classes.selector}
          >
            <InputLabel>
              color
            </InputLabel>
            <Select
              value={item.selectedColor}
              onChange={handleChangeColor}
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
        <div className={classes.form}>
          <FormControl 
            variant="outlined" 
            className={classes.selector}
          >
            <InputLabel>
              size
            </InputLabel>
            <Select
              value={item.selectedSize}
              onChange={handleChangeSize}
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

const useStyles = makeStyles(() => ({
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
}))

export default ProductSelectors