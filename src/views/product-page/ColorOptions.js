import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/styles'

const ColorOptions = props => {
  const classes = useStyles()
  const isSelected = (el) => {
    const { selectedColor } = props.item
    return el === selectedColor
  }
  return (
    <span className={classes.main}>
      {props.colors.map((color, i) => (
        <Link
          to={`/products/${props.model}/${color}`}
          key={i}
        >
          <img 
            src={require(`../../assets/img/merch/500/${props.item.image}${color}.jpg`)}
            alt={`${color} ${props.model}`}
            onMouseEnter={() => props.setColor(color)}
            onMouseLeave={() => props.match.params.color 
              ? props.setColor(props.match.params.color)
              : props.setColor(props.item.attributes.colors[0])
            }
            style={{
              ...styles.image,
              ...isSelected(color)
                ? styles.selected
                : {}
            }}
          />
        </Link>
      ))}
    </span>
  )
}

const useStyles = makeStyles(() => ({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '80%',
    margin: '0 10%',
    padding: '10px 0'
  },
}))

const styles = {
  image: {
    height: '50px',
    width: '50px',
    cursor: 'pointer',
  },
  selected: {
    filter: 'brightness(1.075)'
  }
}

export default ColorOptions