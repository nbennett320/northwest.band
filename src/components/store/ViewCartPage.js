import React, { Component } from 'react'

import CartListing from './CartListing'
import CheckoutFooter from './CheckoutFooter'
import StoreHeader from './StoreHeader'

import '../../css/cart-page.css'

class ViewCartPage extends Component {

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
                size={itemDataArr[i].attributes.size}
                color={itemDataArr[i].attributes.color}
                model={itemDataArr[i].attributes.model}
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

            <div className="cart-page-container" style={styles.main}>

                <StoreHeader textInPhoto="your cart" />

                <div className="head-of-cart" style={styles.cartTop}>

                    <ul className="cart-labels" style={styles.cartLabels}>
                        <li className="product-label" style={styles.productLabel}>product</li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li  className="price-label" style={styles.priceLabel}>price</li>
                    </ul>

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
        paddingBottom: '8vh',
        margin: 'auto',
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

    cartTop: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '80%',
        height: '50px',
        marginLeft: '10%',
        marginRight: '10%',
        paddingTop: '20px',
        paddingBottom: '20px',
        alignContent: 'bottom',
        color: '#3d4246',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: '1em',
        borderBottomWidth: '1px',
        borderBottomColor: 'hsl(0,0%,70%)',
        borderBottomStyle: 'solid',
    },

    cartLabels: {
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignSelf: 'bottom',
    },

    listing: {
        backgroundColor: '#f5f5f5',
        height: 'auto',
        width: '100%',
        paddingBottom: '80px',
        overflowY: 'visible',
    },

    productLabel: {
        marginLeft: '20px',
        marginRight: 'auto',
    },

    priceLabel: {
        // marginLeft: 'auto',
        // marginRight: '80px',
    }

}

export default ViewCartPage