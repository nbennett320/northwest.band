import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import StoreHeader from './components/store/StoreHeader'
import Footer from './components/Footer'

import './css/404.css'

class NoMatch extends Component {

    render () {

        return (

            <div style={styles.main}>

                <StoreHeader textInPhoto={"404... (summ wrong lolz)"} />

                <p style={styles.paragraph}>
                    yeah... sorry looks like the link is wrong... whoops
                </p>

                <Link to='/merch' 
                    style={styles.button}
                    className="button-back-to-home-404"
                >

                    (back to merch page)

                </Link>

                <Footer />

            </div>

        )

    }

}

const styles = {

    main: {
        width: '100%',
        height: 'auto',
        minHeight: 'calc(100%)',
        backgroundColor: '#fff',
        display: 'flex',
        top: '0',
        position: 'absolute',
        flexDirection: 'column',
        alignContent: 'flex-start',
    },

    paragraph: {
        width: '80%',
        marginLeft: '10%',
        marginRight: 'auto',
        marginTop: '40px',
        marginBottom: '40px',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: '1.0em',
        textAlign: 'center',
    },

    button: {
        color: '#69727b',
        backgroundColor: '#fff',
        width: 'auto',
        margin: '40px auto',
        padding: '10px 20px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'hsl(0,0%,80%)',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: 'auto',
    },

}

export default NoMatch