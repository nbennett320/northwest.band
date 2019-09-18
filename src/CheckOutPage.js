import React, { Component } from 'react'

import CartListing from './CartListing'

class CheckOutPage extends Component {

    constructor (props) {
        super (props)

        this.state = {

        }
    }

    mapCartItems = () => {

        const itemDataArr = this.props.itemsInCart
        const listingComponentArr = []

        console.log(itemDataArr)

        for(let i = 0; i < itemDataArr.length; i++) {

            listingComponentArr.push( <CartListing
                title={itemDataArr[i].title}
                thumbnail={itemDataArr[i].defaultImg}
                altText={itemDataArr[i].altText}  
                price={itemDataArr[i].price}
            />

            )

        }

        return listingComponentArr

    }

    render () {

        return (

            <div className="checkout" style={styles.main}>

                <div className="checkout-title" style={styles.title}>
                    Checkout:
                </div>

                <div className="checkout-items" style={styles.listing}>

                    {this.mapCartItems()}

                </div>

            </div>

        )

    }

}

const styles = {
    main: {
        backgroundColor: '#f2d880',
        paddingTop: 'calc(8vh + 40px)',
        paddingBottom: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
        fontFamily: 'Arial, Helvetica, sans-serif',
    },

    title: {
        width: '100%',
        marginTop: '20px',
        marginBottom: '20px',
        color: '#000',
        textAlign: 'center',
        fontSize: '1.5em',
    }, 

    listing: {
        height: '100%',
        width: '100%',
    }
}

export default CheckOutPage