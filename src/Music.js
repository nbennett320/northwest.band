import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Footer from './components/Footer'

import './css/music.css'

class Music extends Component {

    componentWillMount () {

        this.props.setHeaderLink('/')
        
    }

    render() {

        return (

            <div className="music">

                <div className="entry">
                    <h2 className="album-head">
                        suburban dogs<br />
                        november 15, 2019
                    </h2>
    
                    <div className="items">
                        <img className="album-art" src={require('./img/music/subbie dogs text w canvas4.jpg')} alt="subbie dogs album art" />
    
                        <div className="streaming-logos">
                            <a href="https://open.spotify.com/album/6mZfKbuHi4NLT1s393Pnun?si=F-HI9Dw9R8iYznxljM1ZTw">
                                <img className="logo" src={require('./img/logos/spotify_50.png')} alt="spotify logo" />
                            </a>
    
                            <a href="https://music.apple.com/us/album/suburban-dogs/1484159062">
                                <img className="logo" src={require('./img/logos/US-UK_Apple_Music_Badge_RGB.png')} style={styles.iconBorders} alt="apple music logo" />
                            </a>
    
                            <a href="https://music.amazon.com/albums/B07N2ZQ9LP?trackAsin=B07N3118SS&ref=dm_sh_f21d-0dbb-dmcp-d132-8cf60&musicTerritory=US&marketplaceId=ATVPDKIKX0DER">
                                <img className="logo" src={require('./img/logos/amazonmusic_80_50.png')} alt="amazon music logo" />
                            </a>
    
                            <a href="https://music.youtube.com/playlist?list=OLAK5uy_kauUBKraMB_Oo0rcVSbfFwIbEEm5P5EPw">
                                <img className="logo" src={require('./img/logos/YouTubeMusic_50.png')} alt="youtube music logo" />
                            </a>
                        </div>
                    </div>
    
                    <p className="song-list">dog</p>
                    <p className="song-list">come around</p>
                    <p className="song-list">new feel</p>
                    <p className="song-list">(laying, next to)</p>
                    <p className="song-list">uneasy</p>
                    <p className="song-list">porter ave</p>
                    <p className="song-list">half-asleep</p>
                    <p className="song-list">buddy</p>
                    <p className="song-list">crumb</p>
                    <p className="song-list">(outside, sitting)</p>
                    <p className="song-list">miss me</p>
                    <p className="song-list">good for you</p>
                    <p className="song-list">morgan ave</p>
    
                </div>

                <div 
                    className="bottom-bar-music"
                    style={styles.bar}
                />
                
                <div className="entry">
                    <h2 className="album-head">
                        come around<br />
                        june 14, 2019
                    </h2>
    
                    <div className="items">
                        <img className="album-art" src={require('./img/music/come around.jpg')} alt="come around single art" />
    
                        <div className="streaming-logos">
                            <a href="https://open.spotify.com/track/61e9nUYhpHncgnAAzfTbml?si=eyLGXNSfSXCpq3u0xdJ6Fw">
                                <img className="logo" src={require('./img/logos/spotify_50.png')} alt="spotify logo" />
                            </a>
    
                            <a href="https://itunes.apple.com/us/album/new-feel/1450473448?i=1450473451">
                                <img className="logo" src={require('./img/logos/US-UK_Apple_Music_Badge_RGB.png')} style={styles.iconBorders} alt="apple music logo" />
                            </a>
    
                            <a href="https://music.amazon.com/albums/B07N2ZQ9LP?trackAsin=B07N3118SS&ref=dm_sh_f21d-0dbb-dmcp-d132-8cf60&musicTerritory=US&marketplaceId=ATVPDKIKX0DER">
                                <img className="logo" src={require('./img/logos/amazonmusic_80_50.png')} alt="amazon music logo" />
                            </a>
    
                            <a href="https://music.youtube.com/playlist?list=OLAK5uy_kauUBKraMB_Oo0rcVSbfFwIbEEm5P5EPw">
                                <img className="logo" src={require('./img/logos/YouTubeMusic_50.png')} alt="youtube music logo" />
                            </a>
                        </div>
                    </div>
    
                    <p><Link to={`/songs/come-around`} params={{songKey: 'come-around'}}  className="song-link">come around</Link></p>
    
                </div>

                <div 
                    className="bottom-bar-music"
                    style={styles.bar}
                />


                <div className="entry">
                    <h2 className="album-head">
                        new feel<br />
                        january 25, 2019
                    </h2>

                    <div className="items">
                        <img className="album-art" src={require('./img/music/new feel single art.jpg')} alt="new feel single art" />

                        <div className="streaming-logos">
                            <a href="https://open.spotify.com/track/61e9nUYhpHncgnAAzfTbml?si=eyLGXNSfSXCpq3u0xdJ6Fw">
                                <img className="logo" src={require('./img/logos/spotify_50.png')} alt="spotify logo" />
                            </a>
    
                            <a href="https://itunes.apple.com/us/album/new-feel/1450473448?i=1450473451">
                                <img className="logo" src={require('./img/logos/US-UK_Apple_Music_Badge_RGB.png')} style={styles.iconBorders} alt="apple music logo" />
                            </a>
    
                            <a href="https://music.amazon.com/albums/B07N2ZQ9LP?trackAsin=B07N3118SS&ref=dm_sh_f21d-0dbb-dmcp-d132-8cf60&musicTerritory=US&marketplaceId=ATVPDKIKX0DER">
                                <img className="logo" src={require('./img/logos/amazonmusic_80_50.png')} alt="amazon music logo" />
                            </a>
    
                            <a href="https://music.youtube.com/playlist?list=OLAK5uy_kauUBKraMB_Oo0rcVSbfFwIbEEm5P5EPw">
                                <img className="logo" src={require('./img/logos/YouTubeMusic_50.png')} alt="youtube music logo" />
                            </a>
                        </div>
                    </div>

                    <p><Link to={`/songs/new-feel`} params={{songKey: 'newfeel'}}  className="song-link">new feel</Link></p>

                </div>

                <div 
                    className="bottom-bar-music"
                    style={styles.bar}
                />


                <div className="entry">
                    <h2 className="album-head">
                        area code<br />
                        july 15, 2018
                    </h2>

                    <div className="items">
                        <img className="album-art" src={require('./img/music/areacode.png')} alt="area code album art" />

                        <div className="streaming-logos">
                            <a href="https://open.spotify.com/track/61e9nUYhpHncgnAAzfTbml?si=eyLGXNSfSXCpq3u0xdJ6Fw">
                                <img className="logo" src={require('./img/logos/spotify_50.png')} alt="spotify logo" />
                            </a>
    
                            <a href="https://itunes.apple.com/us/album/new-feel/1450473448?i=1450473451">
                                <img className="logo" src={require('./img/logos/US-UK_Apple_Music_Badge_RGB.png')} style={styles.iconBorders} alt="apple music logo" />
                            </a>
    
                            <a href="https://music.amazon.com/albums/B07N2ZQ9LP?trackAsin=B07N3118SS&ref=dm_sh_f21d-0dbb-dmcp-d132-8cf60&musicTerritory=US&marketplaceId=ATVPDKIKX0DER">
                                <img className="logo" src={require('./img/logos/amazonmusic_80_50.png')} alt="amazon music logo" />
                            </a>
    
                            <a href="https://music.youtube.com/playlist?list=OLAK5uy_kauUBKraMB_Oo0rcVSbfFwIbEEm5P5EPw">
                                <img className="logo" src={require('./img/logos/YouTubeMusic_50.png')} alt="youtube music logo" />
                            </a>
                        </div>
                    </div>

                    <p className="song-list-p"><Link to={{pathname:`/songs/swmtn`}} params={{songKey: 'swmtn'}} className="song-link">stay w. me 2nite</Link></p>
                    <p className="song-list">out past curfew</p>
                    <p className="song-list">(loading screen)</p>
                    <p className="song-list-p"><Link to={{pathname:`/songs/lover`}} params={{songKey: 'lover'}} className="song-link">lover...</Link></p>
                    <p className="song-list-p"><Link to={`/songs/rendezvous`} params={{songKey: 'rendezvous'}} className="song-link">rendezvous</Link></p>
                    <p className="song-list-p"><Link to={`/songs/flake`} params={{songKey: 'flake'}} className="song-link">flake</Link></p>
                    <p className="song-list">summer night</p>
                    <p className="song-list-p"><Link to={`/songs/fader`} params={{songKey: 'fader'}} className="song-link">fader</Link></p>
                    <p className="song-list-p"><Link to={`/songs/quink`} params={{songKey: 'quink'}} className="song-link">quink</Link></p>
                    <p className="song-list">dot dot dot</p>
                    <p className="song-list">4431</p>

                </div>

                <div 
                    className="bottom-bar-music"
                    style={styles.bar}
                />

                <Footer />

            </div>

        )

    }

}

const styles = {

    iconBorders: {
        borderRadius: '10px',
    },

    bar: {
        width: '80%',
        borderBottomWidth: '1px',
        borderBottomColor: 'hsl(0,0%,0%)',
        borderBottomStyle: 'solid',
        marginTop: '25px',
        marginBottom: '25px',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}

export default Music