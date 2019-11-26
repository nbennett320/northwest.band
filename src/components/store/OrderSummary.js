import React, { Component } from 'react'
import DropIn from "braintree-web-drop-in-react"
import { Redirect } from 'react-router-dom'

import SummaryListing from './SummaryListing'
import StoreHeader from './StoreHeader'

import '../../css/order-summary-page.css'

class OrderSummary extends Component {

    instance

    state = {
        clientToken: null,
        totalPrice: null
    }

    componentWillMount () {

        this.props.setHeaderLink('/cart')
        
    }

    async componentDidMount() {

        // const response = await fetch("http://localhost:3001/client_token", {method: 'GET'})
        const response = await fetch("http://192.168.86.25:3001/client_token", {method: 'GET'})
        const clientToken = await response.text()

        this.setState({
            clientToken: clientToken,
            totalPrice: this.getTotalPrice()
        })
        
    }

    async buy() {

        const { paymentMethodNonce } = await this.instance.requestPaymentMethod()
        const { amount } = this.state.totalPrice
        const body = {
            "paymentMethodNonce": paymentMethodNonce,
            "amount": amount
        }

        // await fetch(`http://localhost:3001/purchase`, {
        await fetch(`http://192.168.86.25:3001/purchase`, {
            method: 'POST',
            body: JSON.stringify(body)
        })

    }

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

        if(!this.props.cartHasItems) return <Redirect 
                to={'/merch'} 
                push={true}
            />

        if(!this.state.clientToken) return <div>
                    <h1>Loading...</h1>
                </div>

        else return (

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
                            name: &nbsp;
                            {this.props.orderInfo.name}
                        </span>
                        <span style={styles.summaryHeader}>
                            email: &nbsp;
                            {this.props.orderInfo.email}
                        </span>
                        <span style={styles.summaryHeader}>
                            phone: &nbsp;
                            {this.props.orderInfo.phone}
                        </span>
                        <span style={styles.summaryHeader}>address: &nbsp;
                            {this.props.orderInfo.fullAddress.street1} <br />
                            {this.props.orderInfo.fullAddress.city}, {this.props.orderInfo.fullAddress.state} <br />
                            {this.props.orderInfo.fullAddress.zip}-{this.props.orderInfo.fullAddress.zip4} <br />
                        </span>
                    </div>

                    <h3 style={styles.summaryHeader}>total price: ${this.props.totalPrice}</h3>

                    <DropIn 
                        options={{ 
                            authorization: this.state.clientToken,
                            // threeDSecure: true,
                        }}
                        onInstance={instance => (this.instance = instance)}
                    />

                    <button onClick={this.buy.bind(this)}>buy</button>

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
        width: '80%',
        margin: 'auto',
        marginTop: '4vh',
        marginBottom: '4vh',
        display: 'flex',
        flexDirection: 'column'
    },

    itemSummaryContainer: {
        height: 'auto',
        width: '100%',
        marginTop: '10px',
        marginBottom: '10px',
        borderTopWidth: '1px',
        borderTopColor: 'hsl(0,0%,70%)',
        borderTopStyle: 'solid',
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