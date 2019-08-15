import React, { Component } from 'react'

import '../css/header.css'

import headerImg from '../img/Northwest_banner_puddle2.png'

class Header extends Component {

    render () {

        return (
            <div className="header" style={styles.main}>
                
                <a href={this.props.headerLink}>

                    <img src={headerImg} id="headerImg" style={styles.img}/>

                </a>

            </div>
        )
    }
}

const styles = {

    main: {
        width: '100%',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#fff',
        margin: '0',
        padding: '20px 0 20px 0',
    },

    img: {
        width: 'auto',
        height: '-webkit-fill-available',
        marginLeft: 'auto',
        marginRight: 'auto',
    }

}

export default Header