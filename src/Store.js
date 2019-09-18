import React, { Component } from 'react'
import ItemPreview from './components/store/ItemPreview'

// import GenerateProductListing from './scripts/GenerateProductListing'

class Store extends Component {

    items = {

        0:{
            title: 'Northwest (PINK) Cursive Star T-Shirt',
            defaultImg: `${require('./img/img_merch/IMG-2805_512.png')}`,
            hoverImg: `${require('./img/img_merch/IMG-2800_512.png')}`,
            altText: 'hot pink t-shirt with silver northwest cursive star logo',
            description: 'hot pink t-shirt with silver northwest cursive star logo',
            attributes: {
                category: 'shirt',
                subcategory: 'short-sleeve',
                model: 'cursive-star',
                color: 'hot-pink',
            },
            price: '12'
        },

        1:{
            title: 'Northwest (YELLOW) Cursive Star T-Shirt',
            defaultImg: `${require('./img/img_merch/IMG-2801_512.png')}`,
            hoverImg: `${require('./img/img_merch/IMG-2793_512.png')}`,
            altText: 'happy yellow t-shirt with red northwest cursive star logo',
            description: 'happy yellow t-shirt with red northwest cursive star logo',
            attributes: {
                category: 'shirt',
                subcategory: 'short-sleeve',
                model: 'cursive-star',
                color: 'yellow',
            },
            price: '12'
        },

        2:{
            title: 'Northwest (RED) Cursive Star Crewneck',
            defaultImg: `${require('./img/img_merch/IMG-2808_512.png')}`,
            hoverImg: `${require('./img/img_merch/IMG-2809_512.png')}`,
            altText: 'comfy red crewneck with navy northwest cursive star logo',
            description: 'comfy red crewneck with navy northwest cursive star logo',
            attributes: {
                category: 'shirt',
                subcategory: 'crew-neck',
                model: 'cursive-star',
                color: 'red',
            },
            price: '20'
        },

        3:{
            title: 'Northwest (BLACK) Cursive Star Crewneck',
            defaultImg: `${require('./img/img_merch/IMG-2821_512.png')}`,
            hoverImg: `${require('./img/img_merch/IMG-2818_512.png')}`,
            altText: 'comfy black crewneck with white northwest cursive star logo',
            description: 'comfy black crewneck with white northwest cursive star logo',
            attributes: {
                category: 'shirt',
                subcategory: 'crew-neck',
                model: 'cursive-star',
                color: 'black',
            },
            price: '20'
        },

        4:{
            title: 'Northwest (WHITE) Cursive Star T-Shirt',
            defaultImg: `${require('./img/img_merch/IMG-2817_512.png')}`,
            hoverImg: `${require('./img/img_merch/IMG-2816_512.png')}`,
            altText: 'all white t-shirt with red northwest cursibe star logo',
            description: 'all white t-shirt with red northwest cursibe star logo',
            attributes: {
                category: 'shirt',
                subcategory: 'short-sleeve',
                model: 'cursive-star',
                color: 'white',
            },
            price: '20'
        },

    }

    componentDidMount() {
        this.props.setShowCart(true)
    }

    mapCatalog = () => {

        const items = this.items

        let catalog = []

        for (let i = 0; i < Object.keys(items).length; i++) {
            catalog.push( <ItemPreview 
                title={items[i].title} 
                defaultImg={items[i].defaultImg} 
                hoverImg={items[i].hoverImg}
                altText={items[i].altText} 
                description={items[i].description} 
                price={items[i].price}
                key={i*2}
                addItemToCart={this.props.addItemToCart}
            /> )

        }

        return catalog

    }

    render () {

        return (

            <div className="merch" style={styles.main}>

                {this.mapCatalog()}

            </div>

        )

    }

}

const styles = {

    main: {
        backgroundColor: '#e8e1b3',
        // height: 'calc(100vh - 8vh - 40px)',
        paddingTop: 'calc(8vh + 40px)',
        // marginTop: '40px',
        paddingBottom: '40px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
    }

}

export default Store