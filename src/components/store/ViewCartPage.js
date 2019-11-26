import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartListing from './CartListing'
import CartFooter from './CartFooter'
import StoreHeader from './StoreHeader'
import Footer from '../Footer'

import '../../css/cart-page.css'

class ViewCartPage extends Component {

    componentWillMount () {

        this.props.setShowCart(true)

        this.props.setHeaderLink('/merch')

    }

    mapCartItems = () => { 

        let itemDataArr = this.props.itemsInCart
        let listingComponentArr = []

        console.log(itemDataArr)

        for(let i = 0; i < itemDataArr.length; i++) {

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
                key={i*2}
                mapCartItems={this.mapCartItems}
            />

            )

        }

        return listingComponentArr

    }

    handleSizeChange = (newSize, itemCartNumber) => {
        let itemDataArr = this.props.itemsInCart
        itemDataArr[itemCartNumber].attributes.size = newSize.value
    
    }

    showCheckOut = () => {

        let component

        let cartHasItems = this.props.cartHasItems

        if(cartHasItems) {

            component = <div style={{height: 'auto', width: '100%',}}>

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

                    <CartFooter 
                        itemsInCart={this.props.itemsInCart} 
                        totalPrice={this.props.totalPrice} 
                        setTotalPrice={this.props.setTotalPrice}
                    />

                </div>

        } else if(!cartHasItems) {

            component = <div style={{height: 'auto', width: '100%',}}>

                    <div className="head-of-cart" style={styles.cartTop}>

                        <span style={styles.centerSpan}>

                            no items in cart

                        </span>

                    </div>

                    <Link to='/merch'
                        className="return-to-store-panel-button" 
                        style={styles.buttonContainer} 
                        id="return-to-store-only-detail-panel-selector"
                    >   

                        <span>return to store</span>

                    </Link>

                </div>

        }

        return component
    }

    render() {

        return (

            <div className="cart-page-container" style={styles.main}>

                <StoreHeader textInPhoto="your cart" />

                {/* return either checkout options or display no items in cart */}
                {this.showCheckOut()}

                <Footer />

            </div>

        )

    }

}

const styles = {
    main: {
        backgroundColor: '#fff',
        height: 'auto',
        minHeight: '100%',
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
        backgroundColor: '#fff',
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
    },

    centerSpan: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'hsl(0,0%,60%)',
        fontSize: 'larger',
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
        marginTop: '50px',
        marginBottom: '50px',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '2px 8px',
        position: 'relative',
        outline: '0 !important',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: '1em',
    },

}

export default ViewCartPage