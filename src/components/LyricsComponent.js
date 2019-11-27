import React, { Component } from 'react'

class LyricsComponent extends Component {

    render () {

        return (

            <div className="lyrics-component-container" style={styles.main}>

                <div style={styles.head}>
                    <h2 className='song-title' style={{fontSize: '2em'}}>{song.title}</h2>
                    <h2 className='song-date' style={{fontSize: '1.5em'}}>{song.date}</h2>
                </div>

                <div className='lyrics-body' style={styles.body}>
                
                    {this.renderLyrics(song.lyrics)}
                
                </div>

                <img className='misc-img' src={require( `${song.image}` )} alt={song.altText} />

            </div>

        )

    }

}

const styles = {

    main: {
        width: '100%',
        height: 'auto',
        maxHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
    },

    head: {
        marginTop: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignText: 'left',
        color: '#000',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '600',
        fontSize: '2em',
    },

}

export default LyricsComponent