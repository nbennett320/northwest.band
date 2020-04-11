import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import LyricsHeader from './LyricsHeader'
import LyricsBody from './LyricsBody'
import Footer from '../../components/Footer'
import songs from '../../data/Songs.json'

class Lyrics extends Component {
    componentDidMount() {
        this.props.setHeaderLink('/music')
    }

    getSongFromKey = key => {
        for(const i in Object.keys(songs)) {
            const album = Object.keys(songs)[i]
            for(const j in album) {
                const song = songs[album][Object.keys(album)[j]]
                if(makeKey(song["title"]) === key) {
                    return song
                }
            }
        }
    }
    
    render() {
        const { match } = this.props
        const { key } = match.params
        const song = this.getSongFromKey(key)
        const url = require(`../../img/lyrics/${song["album"].toLowerCase()}/${key}.jpg`)
        const helmet = makeHelmet(key, song)

        return (
            <div style={{
                    ...styles.main,
                    backgroundImage: `url('${url}')`
                }}
            >
                {helmet}

                <div style={styles.content}>
                    <LyricsHeader 
                        title={song.title}
                        album={song.album}
                        date={song.date}
                    />

                    <LyricsBody song={song} />
                </div>

                <Footer location={this.props.location} />
            </div>
        )
    }
}

const styles = {
    main: {
        width: '100%',
        height: 'auto',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        top: '0',
        paddingTop: '0',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },

    content: {
        margin: '0 auto',
        marginTop: 'calc(8vh + 40px)',
    }
}

const makeKey = title => title.replace(/\s/g,'-').replace(/[.()]/g,'').toLowerCase()

const makeHelmet = (key, song) => (
    <Helmet>
        <meta charset="utf-8" />
        <meta name="keywords" 
            content="
                northwest, 
                northwest the band, 
                northwest band,
                music, 
                band, 
                merch, 
                merchandise, 
                clothing, 
                screen print, 
                band tees, 
            "
        />
        <link rel="canonical" href="http://northwest.band/music" />
        <meta name="author" content="Noah Bennett" />
        <meta name="robots" content="index" />
        <meta name="url" content={`http://northwest.band/songs/${key}`} />
        <title>northwest the band | {song.title.toLowerCase()} lyrics </title>
        <meta name="description" content={`
            Lyrics for "${song.title}" by Northwest.
        `} />
    </Helmet>
)

export default Lyrics