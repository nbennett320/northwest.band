import React, { Component } from 'react'

class OrderSummary extends Component {

    printItems = () => {

        let items = this.props.itemsInCart
        console.log(items)

    }

    render () {

        return (

            <div className="order-summary-page" style={styles.main}>

                <div className="content" style={styles.content}>

                    <span>Shipping: </span>

                    {this.printItems()}


                </div>
                

            </div>

        )

    }

}

const styles = {

    main: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: '0',
        backgroundColor: '#f2d880',
        fontFamily: 'Arial, Helvetica, sans-serif',
    }, 

    content: {
        width: '50%',
        margin: 'auto',
        marginTop: '15vh',
        display: 'flex',
        flexDirection: 'column'
    }

}

export default OrderSummary