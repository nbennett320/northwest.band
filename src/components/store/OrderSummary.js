import React, { Component } from 'react'
import DropIn from "braintree-web-drop-in-react"
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'

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

        console.log(this.instance)

        // const { nonce } = await this.instance.requestPaymentMethod()
        // await fetch(`http://localhost:3001/purchase/${nonce}`, {method: 'GET'})


        //console.log(nonce)

        await this.instance.requestPaymentMethod(
            (requestPaymentMethodErr, payload) => {
                console.log(payload)
                fetch('http://localhost:3001/purchase', {
                    method: 'POST',
                    body: {
                        'paymentMethodNonce': payload.nonce,
                        'amount': this.state.totalPrice
                    }
                }).then(result => {
                    this.instance.teardown(teardown => {
                        console.log(teardown)
                        if(teardown) console.log("Could not tear down Drop-in UI!")
                        else console.log("tore down")
                    })

                    if(result.success) console.log("success")
                    else console.log(result)
                })
            }
        )
        
        //console.log(paymentMethodNonce)

        // const amount = this.state.totalPrice
        // const body = {
        //     "paymentMethodNonce": paymentMethodNonce,
        //     "amount": amount
        // }

        // only local testing on this machine
        // await fetch(`http://localhost:3001/purchase`, {
        // await fetch(`http://192.168.86.25:3001/purchase`, {
        //     method: 'POST',
        //     body: JSON.stringify(body)
        // })

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

        if(!this.state.clientToken) return <div style={{width: '100%'}}>
                    <div style={{
                            color: 'hsl(0,0%,70%)',
                            textAlign: 'center',
                            marginLeft: 'auto', 
                            marginRight: 'auto',
                        }}
                    >
                        loading
                    </div>
                    {/* loading spinner */}
                    <div className="sk-folding-cube">
                        <div className="sk-cube1 sk-cube"></div>
                        <div className="sk-cube2 sk-cube"></div>
                        <div className="sk-cube4 sk-cube"></div>
                        <div className="sk-cube3 sk-cube"></div>
                    </div>

                </div>

        else return (

            <div className="order-summary-page" style={styles.main}>

                <Helmet>

                    <meta charset="utf-8" />
                    <meta name="keywords" 
                        content="
                            northwest, 
                            northwest the band, 
                            northwest band,
                            north west, 
                            band, 
                            nwi, 
                            219, 
                            contact, 
                            email, 
                            goodies, 
                            art
                        "
                    />
                    <link rel="canonical" href="http://northwest.band" />

                    <meta name="author" content="Noah Bennett" />

                    <meta name="description" content="
                        
                    " />
                    <meta name="robots" content="noindex" />
                    <meta name="url" content="http://northwest.band/order-summary" />

                    <title>northwest the band | place order </title>

                </Helmet>

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
                        onInstance={instance => this.instance = instance}
                    />

                    <button 
                        onClick={this.buy.bind(this)}
                        className="order-summary-buy-button"
                        style={styles.button}
                    >
                        buy
                    </button>

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
        backgroundColor: '#fff',
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

    button: {
        color: '#69727b',
        backgroundColor: '#f7f7f7',
        width: 'auto',
        padding: '10px 20px',
        cursor: 'select',
        color: 'hsl(0, 0%, 50%)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: 'auto',
    },

}

export default OrderSummary