import React, { Component } from 'react'
import StoreHeader from './components/store/StoreHeader'

class Contact extends Component {

    render () {

        return (

            <div className="contact-page" style={styles.main}>

                <StoreHeader textInPhoto={"contact"} />

            </div>

        )

    }

}

const styles = {

    main: {
        width: '100%',
        height: 'auto',
        minHeight: '100%',
        backgroundColor: '#fafafa',
        display: 'flex',
        top: '0',
        position: 'absolute',
        flexDirection: 'column',
    }

}

export default Contact