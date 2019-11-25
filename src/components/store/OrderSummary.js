import React, { Component } from 'react'
import DropIn from "braintree-web-drop-in-react"

import SummaryListing from './SummaryListing'
import StoreHeader from './StoreHeader'

import '../../css/order-summary-page.css'

class OrderSummary extends Component {

    instance

    state = {
        clientToken: null,
    }

    componentWillMount () {

        this.props.setHeaderLink('/cart')
        
    }

    // async componentDidMount() {
    //     const response = await fetch("localhost:3001/client_token")
    //     const clientToken = await response.json()

    //     this.setState({
    //         clientToken
    //     })
    // }

    // async buy() {
    //     const { nonce } = await this.instance.requestPaymentMethod()
    //     await fetch(`localhost:3001/purchases/${nonce}`)
    // }

    printItems = () => {

        const items = this.props.itemsInCart
        
        let summaryItems = []

        for (let i = 0; i < Object.keys(items).length; i++) {
            summaryItems.push( <SummaryListing 
                title={items[i].title}
                attributes={items[i].attributes}
                price={items[i].price}
                key={i*2}
            /> )

        }

        return summaryItems

    }

    getTotalPrice = () => Number(this.props.totalPrice).toFixed(2)



    render () {

        return (

            <div className="order-summary-page" style={styles.main}>

                <StoreHeader textInPhoto="order summary" />

                <div className="content" style={styles.content}>

                    <h3 style={styles.summaryHeader}>shipping: </h3>

                    <div className="itemSummaryContainer" style={styles.itemSummaryContainer}>

                        {this.printItems()}

                    </div>

                    <h3 style={styles.summaryHeader}>to: </h3>
                    <div className="shipping-details" style={styles.shippingDetails}>

                        <span style={styles.summaryHeader}>
                            name: 
                            {this.props.orderInfo.name}
                        </span>
                        <span style={styles.summaryHeader}>
                            email: 
                            {this.props.orderInfo.email}
                        </span>
                        <span style={styles.summaryHeader}>
                            phone: 
                            {this.props.orderInfo.phone}
                        </span>
                        <span style={styles.summaryHeader}>address: 
                            {this.props.orderInfo.fullAddress.street1} <br />
                            {this.props.orderInfo.fullAddress.city}, {this.props.orderInfo.fullAddress.state} <br />
                            {this.props.orderInfo.fullAddress.zip}-{this.props.orderInfo.fullAddress.zip4} <br />
                        </span>
                    </div>

                    <h3 style={styles.summaryHeader}>total price: ${this.props.totalPrice}</h3>

                    {/* <DropIn 
                        options={{ authorization: this.state.clientToken }}
                        onInstance={instance => (this.instance = instance)}
                    />

                    <button onClick={this.buy.bind(this)}>buy</button> */}

                </div>

                

            </div>

        )

    }

}

const styles = {

    main: {
        width: '100%',
        height: 'auto',
        minHeight: '100%',
        position: 'absolute',
        top: '0',
        backgroundColor: '#f5f5f5',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: 'auto',
    }, 

    content: {
        height: '100%',
        width: '75%',
        margin: 'auto',
        marginTop: '4vh',
        display: 'flex',
        flexDirection: 'column'
    },

    itemSummaryContainer: {
        height: '30%',
        overflowY: 'auto',
        marginTop: '10px',
        marginBottom: '10px',
    },

    summaryHeader: { 
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: 'auto',
        marginTop: '20px',
        marginBottom: '20px',
    }, 

    shippingDetails: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginLeft: '20px',
        marginRight: '20px',
    },

    paypal: {
        height: '10%',
        width: '100%',
        position: 'fixed',
        top: 'calc(100vh - 10%)',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        backgroundColor: 'rgb(255, 196, 57)',
        display: 'flex',
        cursor: 'pointer'
    },

    paypalImg: {
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    }

}

export default OrderSummary