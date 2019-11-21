import React, { Component } from 'react'

import '../css/bubble.css'

class NumberOfItemsBubble extends Component {

    render () {

        return (

            <div className="counter-bubble" style={styles.bubble}>

                <div className="bubble-number" style={styles.number}>

                    {this.props.numberOfItemsInCart}

                </div>
                

            </div>

        )

    }

}

const styles = {

    bubble: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        width: '256px',
        height: '256px',
        transform: 'scale(0.075)',
        color: '#fff',
        position: 'absolute',
        fontFamily: 'Arial, Helvetica, sans-serif',
        cursor: 'pointer',
        zIndex: '40',
    },

    number: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign: 'center',
        alignSelf: 'center',
        cursor: 'pointer',
        zIndex: '41',
    }

}

export default NumberOfItemsBubble