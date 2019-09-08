import React, { Component } from 'react'

import './css/music.css'

class Music extends Component {

    render() {

        return (

            <div className="music">
                <div className="entry">
                    <h2>
                        Come Around<br />
                        June 14, 2019
                    </h2>
    
                    <div classNameName="items">
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
    
                    <p className="song-link"><a href=''>Come Around</a></p>
    
                </div>


                <div className="entry">
                    <h2>
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

                    <p className="song-link"><a href="lyrics/newfeel.html">New Feel</a></p>

                </div>


                <div className="entry">
                    <h2>
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

                    <p className="song-link"><a href="lyrics/swm2n.html">Stay W. Me 2nite</a></p>
                    <p>Out Past Curfew</p>
                    <p>(Loading Screen)</p>
                    <p className="song-link"><a href="lyrics/lover.html">Lover...</a></p>
                    <p className="song-link"><a href="lyrics/rendezvous.html">Rendezvous</a></p>
                    <p className="song-link"><a href="lyrics/flake.html">Flake</a></p>
                    <p>Summer Night</p>
                    <p className="song-link"><a href="lyrics/fader.html">Fader</a></p>
                    <p className="song-link"><a href="lyrics/quink.html">Quink</a></p>
                    <p>Dot Dot Dot</p>
                    <p>4431</p>

                </div>
            </div>
        )

    }

}

const styles = {
    iconBorders: {
        borderRadius: '10px',
    }
}

export default Music