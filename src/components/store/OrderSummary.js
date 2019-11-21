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

                <StoreHeader textInPhoto="order summary: " />

                <div className="content" style={styles.content}>

                    <h3>shipping: </h3>

                    <div className="itemSummaryContainer" style={styles.itemSummaryContainer}>

                        {this.printItems()}

                    </div>

                    <h3>to: </h3>
                    <div className="shipping-details" style={styles.shippingDetails}>

                        <h4>name: </h4>
                        {this.props.orderInfo.name}
                        <h4>email: </h4>
                        {this.props.orderInfo.email}
                        <h4>phone: </h4>
                        {this.props.orderInfo.phone}
                        <h4>address: </h4>
                        {this.props.orderInfo.fullAddress.street1} <br />
                        {this.props.orderInfo.fullAddress.city}, {this.props.orderInfo.fullAddress.state} <br />
                        {this.props.orderInfo.fullAddress.zip}-{this.props.orderInfo.fullAddress.zip4} <br />
                    </div>

                    <h3>total price: ${this.props.totalPrice}</h3>

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
        height: '100%',
        width: '100%',
        position: 'fixed',
        top: '0',
        backgroundColor: '#fafafa',
        fontFamily: '"Work Sans",sans-serif',
        // fontWeight: '600',
        // fontSize: 'auto',
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