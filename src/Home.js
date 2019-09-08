import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './css/home.css'

import cloud1 from './img/home/clouds/nwcloud1sprites_364_1500.png'
import cloud2 from './img/home/clouds/nwcloud2sprites_364_1500_2.png'
import cloud3 from './img/home/clouds/nwcloud4sprites_462_2000.png'

class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            hover: {
                musicText: false,
                merchText: false,
                goodiesText: false,
            }
        }
    }

    getMusicText = () => {
        let img = {backgroundImage: `url(${require('./img/home/text/music_sprites2_cropped.png')})`}
        if (this.state.hover.musicText === true) {
            img = {backgroundImage: `url(${require('./img/home/text/music_sprites_hover_500_164.png')})`}
            return img
        }
        else if (this.state.hover.musicText !== true) {
            return img
        }
    }

    getMerchText = () => {
        let img = {backgroundImage: `url(${require('./img/home/text/merchsprites2000x198.png')})`}
        if (this.state.hover.merchText === true) {
            img = {backgroundImage: `url(${require('./img/home/text/merch_hoversprites1500x145.png')})`}
            return img
        }
        else if (this.state.hover.merchText !== true) {
            return img
        }
    }

    getGoodiesText = () => {
        let img = {backgroundImage: `url(${require('./img/home/text/goodiessprites6500x292.png')})`}
        if (this.state.hover.goodiesText === true) {
            img = {backgroundImage: `url(${require('./img/home/text/goodies_hoversprites1500x308.png')})`}
            return img
        }
        else if (this.state.hover.goodiesText !== true) {
            return img
        }
    }

    toggleMusicHover = () => {
        this.setState({ 
            hover: {
                musicText: !this.state.hover.musicText
            } 
        })
    }

    toggleMerchHover = () => {
        this.setState({ 
            hover: {
                merchText: !this.state.hover.merchText
            } 
        })
    }

    toggleGoodiesHover = () => {
        this.setState({ 
            hover: {
                goodiesText: !this.state.hover.goodiesText
            } 
        })
    }
    

    render() {

        return (

            <div className="home">
                <div className="cloud_wrapper">
                    <div className="clouds" id="cloud1" style={styles.clouds.music}>
                        <Link to='/music/'>
                            <div className="text" id="music_text" style={this.getMusicText()} 
                                onMouseEnter={this.toggleMusicHover}
                                onMouseLeave={this.toggleMusicHover}
                                onClick={this.goToMusic}
                            />
                        </Link>
                    </div>

                    <div className="clouds" id="cloud2" style={styles.clouds.merch}>
                        <div className="text" id="merch_text" style={this.getMerchText()}
                            onMouseEnter={this.toggleMerchHover}
                            onMouseLeave={this.toggleMerchHover}
                        />
                    </div>

                    <div className="clouds" id="cloud3" style={styles.clouds.goodies}>
                        <div className="text" id="goodies_text" style={this.getGoodiesText()}
                            onMouseEnter={this.toggleGoodiesHover}
                            onMouseLeave={this.toggleGoodiesHover}
                        />
                    </div>
                </div>
            </div>

        )

    }

}

const styles = {
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
}



export default Home