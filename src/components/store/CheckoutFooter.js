import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../css/checkout-footer.css'

class CheckoutFooter extends Component {

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
        if(this.props.itemsInCart.length === 0) component = <span className="place-order-text" style={styles.placeOrderNoPointer}>No items in cart!</span>
        else if(this.props.verifyOrderValidity === true) component = <Link to={'/place-order'} className="place-order-text" style={styles.placeOrder} onClick={this.handlePlaceOrderClick}>Place Order</Link> 
        else if(this.props.verifyOrderValidity === false) component = <span className="place-order-text" style={styles.placeOrderNoPointer}>Select a size for each item.</span>

        return component

    }

    render () {

        return (

            <div className="checkout-footer" style={styles.foot}>

                <div className="total-container">
                    <span className="total-text">Total:</span>
                
                    <div className="total-num">${this.calculatePrice()}</div>

                    {this.verifyIfValid()}

                </div>

            </div>

        )

    }

}

const styles = {

    foot: {
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(5px)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        position: 'fixed',
    },

    total: {
        height: '100%',
        display: 'flex',
        flexdirection: 'row',
        alignItems: 'center',
        fontSize: '1.5em',
        marginLeft: '20px',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto'
    },

    price: {
        fontSize: '2em',
        marginLeft: 'auto',
        marginRight: 'calc(auto +)',
    },

    span: {
        position: 'fixed'
    },

    placeOrder: {
        color: '#000',
        position: 'fixed',
        cursor: 'pointer'
    },

    placeOrderNoPointer: {
        color: '#000',
        position: 'fixed',
    }

}

export default CheckoutFooter