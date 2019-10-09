import React, { Component } from 'react'

import './css/goodies.css'

class Goodies extends Component {

    render () {

        return (
            
            <div className="goodies" style={styles.main}>

                <div className="goodies-entry">
                    
                    <h2 className="goodie-head">
                        <a href="../downloads/demos/areacode_Demos.zip" download>
                            Area Code Demos
                        </a>
                    </h2>

                    <img className="album-art-goodies" src={require('./img/music/areacodedemoart1.png')} alt="Area code demo art" />

                    <span style={styles.span}>
                        <a href="../downloads/demos/areacode_Demos.zip" download>
                            (CLICK HERE TO DOWNLOAD)
                        </a>
                    </span> 

                </div>

            </div>

        )

    }

}

const styles = {

    main: {
        backgroundColor: '#e597a1',
        paddingTop: 'calc(8vh + 40px)',
        margin: 'auto',
        height: 'calc(100vh - 8vh - 40px)',
        // top: '0',
        // position: 'absolute',
    },

    span: {
        color: '#fff',
        fontFamily: 'Arial, Helvetica, sans-serif',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5px',
        marginBottom: '5px'
    },

    center: {
        marginLeft: 'auto'
    }

}

export default Goodies