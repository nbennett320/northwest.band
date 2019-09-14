import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../css/header.css'

import headerImg from '../img/Northwest_banner_puddle2.png'

class Header extends Component {

    render () {

        return (
            <div className="header" style={styles.main}>
                <Link to='..'>

                    <img src={headerImg} id="headerImg" style={styles.img} alt="northwest header"/>

                </Link>
            </div>
        )
    }
}

const styles = {

    main: {
        width: '100%',
        height: '8vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        margin: '0',
        padding: '20px 0 20px 0',
        position: 'fixed',
        top: '0',
        zIndex: '50',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(5px)'
    },

    img: {
        width: 'auto',
        maxWidth: '633px',
        height: '-webkit-fill-available',
        marginLeft: 'auto',
        marginRight: 'auto',
        zIndex: '51'
    }

}

export default Header