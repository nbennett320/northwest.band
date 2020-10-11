import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import server from '../../server.config'

export default class SongList extends Component {
  state = {
    album: {}
  }

  componentDidMount() {
    this.getSongList()
  }

  // get all songs in album
  getSongList = async () => {
    const { album } = this.props
    const songList = await fetch(`${server}/songs/album/${album}`,
      {
        method: 'GET'
      }).then(res => res.json())
    this.setState({
      album: songList
    })
  }

  render() {
    const { album } = this.state
    return Object.keys(album).length > 0 
      ? (
      <ol>
        {Object.keys(album).map(song => (
          <li key={song}>
            {album[song]["instrumental"] 
              ? <Typography variant="subtitle1" color="secondary">
                {album[song]["title"].toLowerCase()}
              </Typography>
              : <Link to={`music/${makeKey(album[song]["title"])}`} 
                params={{
                  title: album[song]["title"],
                  key: makeKey(album[song]["title"])
                }}
                className="song-link"
              >
                <Typography variant="subtitle1" color="secondary">
                  {album[song]["title"].toLowerCase()}
                </Typography>
              </Link>
            }
          </li>
        ))}
      </ol>
    ) : (
      <div style={{display: 'none'}}>
        ( loading )
      </div>
    )
  }
}

const makeKey = title => title.replace(/\s/g,'-').replace(/[.()]/g,'').toLowerCase()