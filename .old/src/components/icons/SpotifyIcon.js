import React, { Component } from 'react'
import { Icon } from '@material-ui/core'
import SpotifySvg from '../../assets/img/logos/Spotify_Icon_RGB_White.svg'

export default class SpotifyIcon extends Component {
  render() {
    return (
      <Icon color={this.props.color ? this.props.color : 'primary'}>
        <img src={SpotifySvg} 
          height='100%' 
          width='100%'
          alt={"spotify icon"} 
        />
      </Icon>
    )
  }
}