import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Footer from './components/Footer'

import './css/music.css'

class Music extends Component {

    render() {

        return (

            <div className="music">
                
                <div className="entry">
                    <h2 className="album-head">
                        Come Around<br />
                        June 14, 2019
                    </h2>
    
                    <div className="items">
                        <img className="album-art" src={require('./img/music/come around_500.png')} alt="come around single art" />
    
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
    
                    <p><Link to={`/come-around`} params={{songKey: 'comearound'}}  className="song-link">Come Around</Link></p>
    
                </div>


                <div className="entry">
                    <h2 className="album-head">
                        New Feel<br />
                        January 25, 2019
                    </h2>

                    <div className="items">
                        <img className="album-art" src={require('./img/music/new_feel_single500x500.png')} alt="new feel single art" />

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

                    <p><Link to={`/new-feel`} params={{songKey: 'newfeel'}}  className="song-link">New Feel</Link></p>

                </div>


                <div className="entry">
                    <h2 className="album-head">
                        Area Code<br />
                        July 15, 2018
                    </h2>

                    <div className="items">
                        <img className="album-art" src={require('./img/music/areacode_500.png')} alt="area code album art" />

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

                    <p className="song-list-p"><Link to={`/swmtn`} params={{songKey: 'swmtn'}} className="song-link">Stay W. Me 2nite</Link></p>
                    <p className="song-list"> Out Past Curfew</p>
                    <p className="song-list">(Loading Screen)</p>
                    <p className="song-list-p"><Link to={`/lover`} params={{songKey: 'lover'}} className="song-link">Lover...</Link></p>
                    <p className="song-list-p"><Link to={`/rendezvous`} params={{songKey: 'rendezvous'}} className="song-link">Rendezvous</Link></p>
                    <p className="song-list-p"><Link to={`/flake`} params={{songKey: 'flake'}} className="song-link">Flake</Link></p>
                    <p className="song-list">Summer Night</p>
                    <p className="song-list-p"><Link to={`/fader`} params={{songKey: 'fader'}} className="song-link">Fader</Link></p>
                    <p className="song-list-p"><Link to={`/quink`} params={{songKey: 'quink'}} className="song-link">Quink</Link></p>
                    <p className="song-list">Dot Dot Dot</p>
                    <p className="song-list">4431</p>

                </div>

                <Footer />

            </div>

        )

    }

}

const styles = {
    iconBorders: {
        borderRadius: '10px',
    },
}

export default Music