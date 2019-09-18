import React, { Component } from 'react'

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
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        color: '#fff',
        position: 'absolute',
        
        fontFamily: 'Arial, Helvetica, sans-serif',

    },

    number: {
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center'
    }

}

export default NumberOfItemsBubble