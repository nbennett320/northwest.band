import React, { Component } from 'react'
import ImagePreview from './ImagePreview'

import Footer from '../Footer'
import ProductDetailsRightPanel from './ProductDetailsRightPanel';

class ProductPage extends Component {

    render () {

        console.log(this.props)

        return (

            <div className="product-page-container" style={styles.main}>

                <div className="product-page-details-container" style={styles.detailsContainer}>

                    <ImagePreview 
                        
                    />

                    <ProductDetailsRightPanel 
                        addToCart={this.props.addToCart}
                    />

                </div>

                <div className="product-description" style={styles.containerBelowDetails}>

                    

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
        
    },

    containerBelowDetails: {
        width: '100%',


    }

}

export default ProductPage