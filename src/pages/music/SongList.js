import React, { Component } from 'react'
import { Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import songs from './Songs.json'

export default class SongList extends Component {
    render() {
        const album = songs[`${this.props.album}`]
        return (
            <ol>
                {Object.keys(album).map(song => (
                    <li key={song}>
                        {album[song]["instrumental"] 
                            ? <Typography variant="subtitle1" color="secondary">
                                {album[song]["title"].toLowerCase()}
                            </Typography>
                            : <Link to={`songs/${makeKey(album[song]["title"])}`} 
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
        )
    }
}

const makeKey = title => title.replace(/\s/g,'-').replace(/[\.\(\)]/g,'').toLowerCase()