import React, { Component } from 'react'

import CartListing from './CartListing'
import CheckoutFooter from './components/store/CheckoutFooter'

import './css/checkout.css'

class CheckOutPage extends Component {

    constructor(props) {
        super(props)

        this.state = {

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
            />

            )

        }

        return listingComponentArr

    }

    render() {

        return (

            <div className="checkout" style={styles.main}>

                <div className="hacked-wrapper" style={styles.hack}>

                    <div className="checkout-title" style={styles.title}>
                        Checkout:
                    </div>

                    <div className="checkout-items" style={styles.listing}>

                        {this.mapCartItems()}

                    </div>

                    <CheckoutFooter itemsInCart={this.props.itemsInCart} />

                </div>

            </div>

        )

    }

}

const styles = {
    main: {
        backgroundColor: '#f2d880',
        height: 'auto',
        width: '100%',
        paddingTop: '8vh',
        paddingBottom: '8vh',
        //marginTop: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        fontFamily: 'Arial, Helvetica, sans-serif',
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
        backgroundColor: '#f2d880',
        height: 'auto',
        width: '100%',
        paddingBottom: '80px',
        overflowY: 'auto',
    },

    hack: {
        backgroundColor: '#f2d880',
        height: 'calc(100% - (15vh + 8vh))',
        width: '100vw',
        zIndex: '1',
        position: 'absolute',
        paddingBottom: '15vh'

    }
}

export default CheckOutPage