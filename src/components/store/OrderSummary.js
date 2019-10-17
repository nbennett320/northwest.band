import React, { Component } from 'react'
import paypal from 'paypal-checkout'

import SummaryListing from './SummaryListing'

import '../../css/order-summary-page.css'

class OrderSummary extends Component {

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

                <div className="content" style={styles.content}>

                    <h3>Shipping: </h3>

                    <div className="itemSummaryContainer" style={styles.itemSummaryContainer}>

                        {this.printItems()}

                    </div>

                    <h3>To: </h3>
                    <div className="shipping-details" style={styles.shippingDetails}>

                        <h4>Name: </h4>
                        {this.props.orderInfo.name}
                        <h4>Email: </h4>
                        {this.props.orderInfo.email}
                        <h4>Phone: </h4>
                        {this.props.orderInfo.phone}
                        <h4>Address: </h4>
                        {this.props.orderInfo.fullAddress.street1} <br />
                        {this.props.orderInfo.fullAddress.city}, {this.props.orderInfo.fullAddress.state} <br />
                        {this.props.orderInfo.fullAddress.zip}-{this.props.orderInfo.fullAddress.zip4} <br />
                    </div>

                    <h3>Total price: ${this.props.totalPrice}</h3>

                </div>

                <div id="paypal-button-container" style={styles.paypal}
                    onClick={
                        paypal.createOrder = (data, actions) => {
                            return actions.order.create({
                                purchase_units: [{
                                    amount: {
                                        value: `${this.getTotalPrice()}`
                                    }
                                }]
                            })
                        },
            
                        paypal.onApprove = (data, actions) => {
                            return actions.order.capture().then(
                                (details) => {
                                    alert('Transaction completed by ' + details.payer.name.given_name)
                                }
                            )
                        }

                    }
                >
                    <img src={require('../../img/logos/paypal_960_720.png')} style={styles.paypalImg}/>

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
        backgroundColor: '#f2d880',
        fontFamily: 'Arial, Helvetica, sans-serif',
    }, 

    content: {
        height: '100%',
        width: '75%',
        margin: 'auto',
        marginTop: '15vh',
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