import React, { Component } from 'react'
import ProductListing from './ProductListing'
import products from '../../data/Products.json'

class Products extends Component {
    makeCatalog = filter => {
        const clothing = products["clothing"]
        const other = products["other"]
        const clothingArr = Object.keys(clothing).map(i => {
            const product = clothing[i]
            return (
                <ProductListing 
                    title={product["title"]}
                    price={product["price"]}
                    imageSrc={product["image"]}
                    description={product["description"]}
                    attributes={product["attributes"]}
                    zIndex={i}
                    key={i}
                />
            )
        })

        const otherArr = Object.keys(other).map(i => {
            const product = other[i]
            return (
                <ProductListing 
                    title={product["title"]}
                    price={product["price"]}
                    imageSrc={product["image"]}
                    description={product["description"]}
                    attributes={product["attributes"]}
                    zIndex={i + clothingArr.length}
                    key={i + clothingArr.length}
                />
            )
        })

        console.log([...clothingArr, ...otherArr])
        return [...clothingArr, ...otherArr]
    }

    render() {
        return (
            <div style={styles.main}>
                {this.makeCatalog()}
            </div>
        )
    }
}

const styles = {
    main: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexFlow: 'wrap',
        position: 'absolute',
        top: '0',
        paddingTop: 'calc(5vh + 40px)'
    }
}

export default Products