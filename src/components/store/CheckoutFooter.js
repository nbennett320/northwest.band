import React, { Component } from 'react'

class CheckoutFooter extends Component {

    calculatePrice = () => {

        let sum = 0
        const cartArr = this.props.itemsInCart

        for(let i = 0; i < cartArr.length; i++) {
            sum += cartArr[i].price
        }

        return sum

    }

    render () {

        return (

            <div className="checkout-footer" style={styles.foot}>

                <div style={styles.total}>
                    <span style={styles.span}>Total:</span>
                
                    <div style={styles.price}>${this.calculatePrice()}</div>
                </div>

            </div>

        )

    }

}

const styles = {

    foot: {
        height: '8vh',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.1)',
        backdropFilter: 'blur(5px)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        position: 'fixed',
        top: '92vh'
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
        marginRight: 'auto',
    },

    span: {
        position: 'fixed'
    },

}

export default CheckoutFooter