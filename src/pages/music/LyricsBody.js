import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class LyricsBody extends Component {
    listLyrics = () => {
        const { lyrics } = this.props.song
        return lyrics.map((el, i) => (
            <span key={i}> {el.toLowerCase()} <br /> </span>
        ))
    }

    render() {
        return (
            <div style={styles.main}>
                <Typography variant="body2" color="secondary">
                    {this.listLyrics()}
                </Typography>
            </div>
        )
    }
}

const styles = {
    main: {
        margin: '20px 0'
    }
}