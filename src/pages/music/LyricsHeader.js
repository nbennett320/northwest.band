import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class LyricsHeader extends Component {
  render() {
    const { title, album, date } = this.props
    return (
      <div>
        <Typography variant="h4" color='secondary'> {title.toLowerCase()} </Typography>
        <Typography variant="subtitle2" color='secondary'> {album.toLowerCase()} </Typography>
        <Typography variant="subtitle2" color='secondary'> {date.toLowerCase()} </Typography>
      </div>
    )
  }
}