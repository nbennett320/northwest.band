import React, { Component } from 'react'
import NumberOfItemsBubble from './NumberOfItemsBubble'
import '../css/cart-logo.css'

class Cart extends Component {

    render () {

        const displayCounter = () => {
            if(this.props.numberOfItemsInCart > 0) return <NumberOfItemsBubble numberOfItemsInCart={this.props.numberOfItemsInCart} />
        }

        return (

            <div className='shopping-cart'>

                <div className='cart-image'
                    style={{backgroundImage: `url(${require('../img/store/cart300x100.png')})`}}
                />

                {displayCounter()}

            </div>

        )

    }

}

export default Cart