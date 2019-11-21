import React, { Component } from 'react'

import Footer from '../Footer'

class ProductPage extends Component {

    render () {

        return (

            <div className="product-page-container" style={styles.main}>

                <div className="product-page-details-container" style={styles.detailsContainer}>



                </div>

                <Footer />
                
            </div>

        )

    }

}

const styles = {

    main: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },

    detailsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
        
    }

}

export default ProductPage