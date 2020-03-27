import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import Album from './Album'
import Footer from '../../components/Footer'
import ApathyArt from '../../img/music/apathy2.png'
import SuburbanDogsArt from '../../img/music/subbie dogs text w canvas4.jpg'
import AreaCodeArt from '../../img/music/areacode.png'

import '../../css/music.css'

class Music extends Component {
    componentDidMount () {
        this.props.setHeaderLink('/')
    }

    render() {
        return (
            <div style={styles.main}>
                {helmet}

                <div style={styles.entry}>
                    <Album 
                        title='Apathy'
                        date='january 25, 2020'
                        img={ApathyArt}
                        device={this.props.device}
                    />
                </div>

                <div style={styles.entry}>
                    <Album 
                        title='Suburban Dogs'
                        date='november 15, 2019'
                        img={SuburbanDogsArt}
                        device={this.props.device}
                    />
                </div>

                <div style={styles.entry}>
                    <Album 
                        title='Area Code'
                        date='july 15, 2018'
                        img={AreaCodeArt}
                        device={this.props.device}
                    />
                </div>

                <Footer />
            </div>
        )
    }
}

const styles = {
    main: {
        width: '100%',
        height: 'auto',
        paddingTop: 'calc(8vh + 40px)',
        paddingBottom: '2vh',
        margin: '0',
        display: 'flex',
        flexDirection: 'column',
        top: '0',
        position: 'absolute',
        backgroundColor: '#000',
        letterSpacing: '1px',
    },

    entry: {
        width: '100%',
        paddingBottom: '40px'
    },
}

const helmet = <Helmet>
    <meta charset="utf-8" />
    <meta name="keywords" 
        content="
            northwest, 
            northwest the band, 
            northwest band,
            music, 
            band, 
            lyrics, 
            219, 
            indie, 
            rock, 
            songs, 
        "
    />
    <link rel="canonical" href="http://northwest.band/music" />
    <meta name="author" content="Noah Bennett" />
    <meta name="description" content="
        A list of Northwest's entire discography and respective lyrics.
    " />
    <meta name="robots" content="index" />
    <meta name="url" content="http://northwest.band/music" />
    <title>northwest the band | music, lyrics, and artwork</title>
</Helmet>

export default Music