import React, { Component } from 'react'

class ProductDetailsRightPanel extends Component {

    render () {

        return (

            <div className="product-details-right-panel" style={styles.main} >
                
                <h1 style={styles.title}>
                    {this.props.title}
                </h1>

                <h2 style={styles.price}>
                    {this.props.price}
                </h2>
                

            </div>

        )

    }

}

const styles = {

    main: {
        width: '50% auto',
    },

    title: {
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '800',
        fontSize: '2.5em',
        margin: '0 50px',
        color: '#3d4246',
    },

    price: {
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '800',
        fontSize: 'x-large',
    }

}

export default ProductDetailsRightPanel