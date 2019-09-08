import React, { Component } from 'react'

import '../css/header.css'

import headerImg from '../img/Northwest_banner_puddle2.png'

class Header extends Component {

    render () {

        return (
            <div className="header" style={styles.main}>
                <div className="bar" style={styles.bar}>
                    <a href={this.props.headerLink}>

                        <img src={headerImg} id="headerImg" style={styles.img}/>

                    </a>
                </div>
            </div>
        )
    }
}

const styles = {

    main: {
        width: '100%',
        height: 'calc(10vh + 40px)',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fec0d3',
        margin: '0',
        top: '0',
        zIndex: '49'
    },

    bar: {
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        margin: '0',
        padding: '20px 0 20px 0',
        position: 'fixed',
        top: '0',
        zIndex: '50',
        boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(5px)'
    },

    img: {
        width: 'auto',
        height: '-webkit-fill-available',
        marginLeft: 'auto',
        marginRight: 'auto',
    }

}

export default Header