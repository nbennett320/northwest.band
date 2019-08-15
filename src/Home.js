import React, { Component } from 'react'

import './css/home.css'

import cloud1 from './img/home/clouds/nwcloud1sprites_364_1500.png'
import cloud2 from './img/home/clouds/nwcloud2sprites_364_1500_2.png'

class Home extends Component {

    render() {

        return (

            <div className="home" style={styles.home}>

                <div className="main" style={styles.main}>

                    <div className="cloud" id="cloud1" style={styles.clouds.music}>
                        <div id="cloudText" id="musicText" style={styles.text.music} />
                    </div>

                    <div className="cloud" id="cloud2" style={styles.clouds.merch}>
                        <div id="cloudText" id="merchText" style={styles.text.merch} />
                    </div>

                    <div className="cloud" id="cloud3" style={styles.clouds.goodies}>
                        <div id="cloudText" id="goodiesText" style={styles.text.goodies} />
                    </div>

                </div>

            </div>

        )

    }

}

const styles = {
    home: {
        width: '100%',
        background: '#fec0d3',
    },
    
    main: {
        width: '100%',
        overflow: 'hidden',
    },

    clouds: {
        music: {
            width: '500px',
            height: '364px',
            margin: '2% auto',
            background: `url(${cloud1})`,
        },

        merch: {
            width: '500px',
            height: '354px',
            margin: '2% auto',
            background: `url(${cloud2})`,
        },

        goodies: {

        }
    },

    text: {
        music: {

        },

        merch: {

        },

        goodies: {

        }
    }
}



export default Home