import React, { Component } from 'react'

import '../css/footer.css'

class Footer extends Component {

    render() {

        return (

            <div style={styles.footer}>

                <div style={styles.footerHeader}>hit us up!!</div>

                <ul style={styles.links}>

                <li style={styles.spans}><a className="footer-list-entry" href="https://www.instagram.com/northwest219/">instagram</a></li>
                    <li style={styles.spans}><a className="footer-list-entry" href="https://twitter.com/northwest219">twitter</a></li>
                    <li style={styles.spans}><a className="footer-list-entry" href="https://open.spotify.com/artist/0hscERxMRDZRqZIHjKbExD?si=FGhntveJTxKsk9KsoGFM0A">spotify</a></li>
                    <li style={styles.spans}><a className="footer-list-entry" href="https://music.apple.com/us/artist/northwest/1409175767">apple music</a></li>
                    <li style={styles.spans}><a className="footer-list-entry" href="https://www.youtube.com/channel/UCsAuRJv-BwMcLELAjNH46dQ">youtube</a></li>

                </ul>

                <div style={styles.bottom}>&copy; Northwest 2020</div>

            </div>

        )

    }

}

const styles = {

    footer: {
        width: '100%',
        height: 'auto',
        // marginTop: '40px',
        position: 'absolute',
        padding: '50px 0 50px 0',
        backgroundColor: '#000', 
        color: '#fff',
        top: '100%',
    },

    footerHeader: {
        width: 'auto',
        marginLeft: '10%',
        marginRight: 'auto',
        fontWeight: '600',
        fontFamily: '"Work Sans",sans-serif'
    },

    links: {
        width: 'auto',
        marginLeft: '10%',
        marginRight: 'auto',
        fontWeight: '300',
        fontFamily: '"Work Sans",sans-serif'
    },

    spans: {
        listStyleType: 'none',
        paddingTop: '10px',
        paddingBottom: '10px',
    },
    
    bottom: {
        width: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        textAlign: 'center',
        fontSize: '0.8em',
        fontFamily: '"Work Sans",sans-serif'
    }

}

export default Footer