import React, { Component } from 'react'
import { Icon } from '@material-ui/core'
import AppleMusicSvg from '../../img/logos/Apple_Music_Icon_wht.svg'

export default class AppleMusicIcon extends Component {
  render() {
    return (
      <Icon color={this.props.color ? this.props.color : 'primary'}>
        <img src={AppleMusicSvg} 
          height='100%' 
          width='100%'  
        />
      </Icon>
    )
  }
}