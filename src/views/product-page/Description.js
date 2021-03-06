import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class Description extends Component {
  render() {
    const { item } = this.props
    if(item['selectedColor'])
      return (
        <Typography variant="body1">
          {item && `${aOrAn(item.selectedColor)} ${item.selectedColor} ${item.description}`}
          {/* <br />
          {item && item.attributes.type === "clothing" && "all shirts screen printed by northwest &#128077;"} */}
        </Typography>
      )
    else return (
      <div style={{display: 'none'}}>
        ( loading )
      </div>
    )
  }
}

const aOrAn = word => isVowel(word[0])
  ? "an" 
  : "a"

const isVowel = letter => /[aeiou]/.test(letter)