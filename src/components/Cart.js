import React, { Component } from 'react'

import '../css/cart-logo.css'

class Cart extends Component {

    render () {

        return (

            <div className='shopping-cart'>

                <div className='cart-image'
                    style={{backgroundImage: `url(${require('../img/store/cart300x100.png')})`}}
                />

            </div>

        )

    }

}

export default Cart