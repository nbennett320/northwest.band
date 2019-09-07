import React, { Component } from 'react'

import './css/home2.css'

import cloud1 from './img/home/clouds/nwcloud1sprites_364_1500.png'
import cloud2 from './img/home/clouds/nwcloud2sprites_364_1500_2.png'
import cloud3 from './img/home/clouds/nwcloud4sprites_462_2000.png'
import musicText from './img/home/text/music_sprites2_cropped.png'
import musicTextHover from './img/home/text/music_sprites_hover_500_164.png'

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            musicText: false,
            merchText: false,
            goodiesText: false,
        }
    }

    getMusicText = () => {
        if (this.state.musicText === true) return musicTextHover
        else return musicText
    }

    render() {

        return (

            <div className="home">
                <div className="cloud_wrapper">
                    <div className="clouds" id="cloud1" style={styles.clouds.music}>
                        <div className="text" id="music_text" style={styles.text.music} />
                    </div>

                    <div className="clouds" id="cloud2" style={styles.clouds.merch}>
                        <div className="text" id="merch_text"
                            onMouseEnter={() => {this.setState({ musicText: true })}}
                        />
                    </div>

                    <div className="clouds" id="cloud3" style={styles.clouds.goodies}>
                        <div className="text" id="goodies_text"  />
                    </div>
                </div>
            </div>

        )

    }

}

const styles = {
    // main: {
    //     background: '#fec0d3',
    //     backgroundSize: 'contain',
    //     overflow: 'hidden',
    //     width: '100%',
    //     height: 'auto',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'flex-start',
    //     justifyContent: 'center',
    // },

    clouds: {
        music: {
            backgroundImage: `url(${cloud1})`,
        },

        merch: {
            backgroundImage: `url(${cloud2})`,
        },

        goodies: {
            backgroundImage: `url(${cloud3})`,
        }
    },

    text: {
        music: {
            backgroundImage: `url(${musicText})`
        },

        merch: {

        },

        goodies: {

        }
    }
}



export default Home