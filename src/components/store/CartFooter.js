import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../css/cart-footer.css'

class CartFooter extends Component {

    calculatePrice = () => {

        let sum = 0
        const cartArr = this.props.itemsInCart

        for(let i = 0; i < cartArr.length; i++) {
            sum += cartArr[i].price
        }

        return sum

    }

    handlePlaceOrderClick = () => {
        let sum = this.calculatePrice()
        this.props.setTotalPrice(sum)
    }

    verifyIfValid = () => {

        let component
        if(this.props.itemsInCart.length === 0) component = <span className="place-order-text" style={styles.placeOrderNoPointer}>no items in cart...!</span>
        else if(this.props.verifyOrderValidity === true) component = <Link to={'/place-order'} className="place-order-text" style={styles.placeOrder} onClick={this.handlePlaceOrderClick}>place order</Link> 
        else if(this.props.verifyOrderValidity === false) component = <span className="place-order-text" style={styles.placeOrderNoPointer}>select a size for each item.</span>

        return component

    }

    render () {

        return (

            <div className="cart-footer" style={styles.foot}>

                <div className="subtotal-section" style={styles.subtotal}>

                    <span>subtotal</span>
                    
                    <span>${this.calculatePrice()}</span>

                </div>

                <Link to='/place-order'
                    className="cart-panel-button" 
                    style={styles.buttonContainer} 
                    id="cart-middle-detail-panel-selector"
                    onClick={this.handlePlaceOrderClick}
                >

                    <span>place order</span>

                </Link>

            </div>

        )

    }

}

const styles = {

    foot: {
        width: '80%',
        height: '250px',
        backgroundColor: '#fff',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#69727b',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '600',
        fontSize: '1em',
    },

    subtotal: {
        width: '50%',
        paddingLeft: '5px',
        paddingRight: '5px',
        paddingBottom: '20px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: '1em',
    },

    buttonContainer: {
        color: 'hsl(0, 0%, 50%)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderRadius: '4px',
        minHeight: '38px',
        width: '40%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        // marginRight: 'calc(40px + 10% - 2em + 9px)',
        padding: '2px 8px',
        position: 'relative',
        outline: '0 !important',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: '1em',
    },

}

export default CartFooter