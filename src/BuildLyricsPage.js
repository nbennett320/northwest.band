import React, { Component } from 'react'
import LyricsHeader from './components/LyricsHeader'

class BuildLyricsPage extends Component {

    constructor (props) {

        super (props)

    }

    renderLyrics = lyrics => {
        let stringArr = []

        for(let i = 0; i < lyrics.length; i++) {
            if(lyrics[i] !== ``){
                stringArr.push( <div className="lines" style={styles.lines} key={i}>{lyrics[i]}</div> )
            } else {
                stringArr.push( <br key={i} /> )
            }
            
        }

        return stringArr
    }

    render () {

        return (

            <div className="lyrics-component-container" style={styles.main}>

                <LyricsHeader 
                    title={this.props.song.title}
                    album={this.props.song.album}
                    date={this.props.song.date}
                />

                <div className='lyrics-body' style={styles.body}>
                
                    {this.renderLyrics(this.props.song.lyrics)}
                
                </div>

                <img className='misc-img' src={require( `${this.props.song.image}` )} alt={this.props.song.altText} />

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
        textTransform: 'lowercase',
    },

    head: {
        width: 'auto',
        height: 'auto',
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        alignText: 'left',
        color: '#000',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '600',
        fontSize: '2em',
    },

    body: {
        width: 'auto',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: 'auto',
    },

}

export default BuildLyricsPage