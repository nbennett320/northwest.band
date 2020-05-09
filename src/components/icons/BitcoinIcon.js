import React, { Component } from 'react'
import { Icon } from '@material-ui/core'
import BitcoinSvg from '../../img/logos/bitcoin3.svg'

export default class BitcoinIcon extends Component {
  render() {
    return (
      <Icon color={this.props.color ? this.props.color : 'primary'}>
        <img src={BitcoinSvg} 
          height='100%' 
          width='100%'  
        />
      </Icon>
    )
  }
}