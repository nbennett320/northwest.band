import React from 'react'
import { Typography } from '@material-ui/core'

const Description = props => {
  const { item } = props
  if(item['selectedColor'])
    return (
      <Typography variant="body1">
        {item && `${aOrAn(item.selectedColor)} ${item.selectedColor} ${item.description}`}
      </Typography>
    )
  else return (
    <div style={{display: 'none'}}>
      ( loading )
    </div>
  )
}

const aOrAn = word => isVowel(word[0])
  ? "an" 
  : "a"

const isVowel = letter => /[aeiou]/.test(letter)

export default Description