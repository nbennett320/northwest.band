import React, { Component } from 'react'

import CartListing from './CartListing'
import CheckoutFooter from './CheckoutFooter'

import '../../css/checkout.css'

class CheckOutPage extends Component {

    constructor (props) { 
        super (props)

        this.state = {
            canPurchase: false
        }

    }

    mapCartItems = () => {

        const itemDataArr = this.props.itemsInCart
        const listingComponentArr = []

        console.log(itemDataArr)

        for (let i = 0; i < itemDataArr.length; i++) {

            listingComponentArr.push(<CartListing
                title={itemDataArr[i].title}
                thumbnail={itemDataArr[i].defaultImg}
                altText={itemDataArr[i].altText}
                price={itemDataArr[i].price}
                itemCartNumber={i}
                removeItem={this.props.removeItem}
                handleSizeChange={this.handleSizeChange}
            />

            )

        }

        return listingComponentArr

    }

    handleSizeChange = (newSize, itemCartNumber) => {
        const itemDataArr = this.props.itemsInCart
        itemDataArr[itemCartNumber].attributes.size = newSize.value
        this.verifyOrderValidity()
    }

    verifyOrderValidity = () => {

        let dummyCartArr = this.props.itemsInCart
        let bool = true

        for(let i = 0; i < dummyCartArr.length; i++) {
            if(dummyCartArr[i].attributes.size === '') bool = false
        }

        this.setState({canPurchase: bool})

    }

    render() {

        return (

            <div className="checkout" style={styles.main}>

                <div className="checkout-title" style={styles.title}>
                    checkout:
                </div>

                <div className="checkout-items" style={styles.listing}>

                    {this.mapCartItems()}

                </div>

                <CheckoutFooter 
                    itemsInCart={this.props.itemsInCart} 
                    totalPrice={this.props.totalPrice} 
                    setTotalPrice={this.props.setTotalPrice}
                    verifyOrderValidity={this.state.canPurchase}
                />

            </div>

        )

    }

}

const styles = {
    main: {
        // backgroundColor: '#f2d880',
        backgroundColor: '#f5f5f5',
        height: 'auto',
        width: '100%',
        paddingTop: '8vh',
        paddingBottom: '8vh',
        margin: 'auto',
        //marginTop: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        position: 'absolute',
        top: '0',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '600',
        fontSize: 'auto',
    },

    title: {
        width: '100%',
        marginTop: '60px',
        marginBottom: '20px',
        color: '#000',
        textAlign: 'center',
        fontSize: '1.5em',
    },

    listing: {
        backgroundColor: '#f5f5f5',
        height: 'auto',
        width: '100%',
        paddingBottom: '80px',
        overflowY: 'visible',
    },

}

export default CheckOutPage