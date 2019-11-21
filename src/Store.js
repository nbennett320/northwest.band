import React, { Component } from 'react'
import ItemPreview from './components/store/ItemPreview'
import StoreHeader from './components/store/StoreHeader'
import Footer from './components/Footer'

class Store extends Component {

    items = {

        0: {
            title: 'northwest (hot pink) suburban dogs tee',
            defaultImg: `${require('./img/img_merch/img_500x500/hotpinksd.png')}`,
            hoverImg: `${require('./img/img_merch/img_500x500/hotpinksd.png')}`,
            altText: 'hot pink t-shirt with black suburban dogs logo',
            description: 'hot pink t-shirt with black suburban dogs logo',
            attributes: {
                category: 'shirt',
                subcategory: 'short-sleeve',
                model: 'suburban-dogs-tee',
                color: 'hot-pink',
                size: '',
            },
            price: 12
        },

        1: {
            title: 'northwest (orange) suburban dogs tee',
            defaultImg: `${require('./img/img_merch/img_500x500/orangesd.png')}`,
            hoverImg: `${require('./img/img_merch/img_500x500/orangesd.png')}`,
            altText: 'bright orange t-shirt with black suburban dogs logo',
            description: 'bright orange t-shirt with black suburban dogs logo',
            attributes: {
                category: 'shirt',
                subcategory: 'short-sleeve',
                model: 'suburban-dogs-tee',
                color: 'orange',
                size: '',
            },
            price: 12
        },

        2: {
            title: 'northwest (vintage rose) suburban dogs tee',
            defaultImg: `${require('./img/img_merch/img_500x500/pinksd.png')}`,
            hoverImg: `${require('./img/img_merch/img_500x500/pinksd.png')}`,
            altText: 'light pink t-shirt with black suburban dogs logo',
            description: 'light pink t-shirt with black suburban dogs logo',
            attributes: {
                category: 'shirt',
                subcategory: 'crew-neck',
                model: 'suburban-dogs-tee',
                color: 'pink',
                size: '',
            },
            price: 12
        },

        3: {
            title: 'northwest (eggshell) suburban dogs tee',
            defaultImg: `${require('./img/img_merch/img_500x500/whitesd.png')}`,
            hoverImg: `${require('./img/img_merch/img_500x500/whitesd.png')}`,
            altText: 'white (kinda eggshell-y) t-shirt with black suburban dogs logo',
            description: 'white (kinda eggshell-y) t-shirt with black suburban dogs logo',
            attributes: {
                category: 'shirt',
                subcategory: 'crew-neck',
                model: 'suburban-dogs-tee',
                color: 'white',
                size: '',
            },
            price: 12
        },

        4: {
            title: 'northwest (yellow) suburban dogs tee',
            defaultImg: `${require('./img/img_merch/img_500x500/yellowsd.png')}`,
            hoverImg: `${require('./img/img_merch/img_500x500/yellowsd.png')}`,
            altText: 'yellow t-shirt with black suburban dogs logo',
            description: 'yellow t-shirt with black suburban dogs logo',
            attributes: {
                category: 'shirt',
                subcategory: 'short-sleeve',
                model: 'suburban-dogs-tee',
                color: 'yellow',
                size: '',
            },
            price: 12
        },

        5: {
            title: 'northwest (white) e.t. tee',
            defaultImg: `${require('./img/img_merch/img_500x500/et shirt.png')}`,
            hoverImg: `${require('./img/img_merch/img_500x500/et shirt.png')}`,
            altText: 'all white nw tee endorsed by everyone\'s favorite extra terrestrial',
            description: 'all white nw tee endorsed by everyone\'s favorite extra terrestrial',
            attributes: {
                category: 'shirt',
                subcategory: 'short-sleeve',
                model: 'et-tee',
                color: 'white',
                size: '',
            },
            price: 12
        },

        6: {
            title: 'northwest (yellow) e.t. tee',
            defaultImg: `${require('./img/img_merch/img_500x500/yellow et.png')}`,
            hoverImg: `${require('./img/img_merch/img_500x500/yellow et.png')}`,
            altText: 'yellow nw tee endorsed by everyone\'s favorite extra terrestrial',
            description: 'yellow nw tee endorsed by everyone\'s favorite extra terrestrial',
            attributes: {
                category: 'shirt',
                subcategory: 'short-sleeve',
                model: 'et-tee',
                color: 'yellow',
                size: '',
            },
            price: 12
        },

        7: {
            title: 'northwest (grey) suburban dogs hoodie',
            defaultImg: `${require('./img/img_merch/img_500x500/grey hoodie.png')}`,
            hoverImg: `${require('./img/img_merch/img_500x500/grey hoodie.png')}`,
            altText: 'grey hoodie with black suburban dogs',
            description: 'grey hoodie with black suburban dogs',
            attributes: {
                category: 'sweatshirt',
                subcategory: 'hoodie',
                model: 'suburban-dogs-hoodie',
                color: 'grey',
                size: '',
            },
            price: 22
        },

        8: {
            title: 'northwest (orange) suburban dogs hoodie',
            defaultImg: `${require('./img/img_merch/img_500x500/orange hoodie.png')}`,
            hoverImg: `${require('./img/img_merch/img_500x500/orange hoodie.png')}`,
            altText: 'bright orange hoodie with black suburban dogs',
            description: 'bright orange hoodie with black suburban dogs',
            attributes: {
                category: 'sweatshirt',
                subcategory: 'hoodie',
                model: 'suburban-dogs-hoodie',
                color: 'orange',
                size: '',
            },
            price: 22
        },

        9: {
            title: 'northwest (pink) suburban dogs hoodie',
            defaultImg: `${require('./img/img_merch/img_500x500/pink hoodie.png')}`,
            hoverImg: `${require('./img/img_merch/img_500x500/pink hoodie.png')}`,
            altText: 'pink hoodie with black suburban dogs',
            description: 'pink hoodie with black suburban dogs',
            attributes: {
                category: 'sweatshirt',
                subcategory: 'hoodie',
                model: 'suburban-dogs-hoodie',
                color: 'pink',
                size: '',
            },
            price: 22
        },

    }

    componentDidMount() {
        this.props.setShowCart(true)
    }

    mapCatalog = () => {

        const items = this.items

        let catalog = []

        for (let i = 0; i < Object.keys(items).length; i++) {
            catalog.push(<ItemPreview
                title={items[i].title}
                defaultImg={items[i].defaultImg}
                hoverImg={items[i].hoverImg}
                altText={items[i].altText}
                description={items[i].description}
                attributes={items[i].attributes}
                price={items[i].price}
                key={i * 2}
                addItemToCart={this.props.addItemToCart}
            />)

        }

        return catalog

    }

    render() {

        return (

            <div className="merch" style={styles.main}>

                <StoreHeader textInPhoto="northwest merchies :)" />

                {this.mapCatalog()}

                <Footer />

            </div>

        )

    }

}

const styles = {

    main: {
        backgroundColor: '#fafafa',
        // paddingTop: '5vh',
        paddingBottom: '40px',
        display: 'flex',
        top: '0',
        position: 'absolute',
        flexDirection: 'row',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
    }

}

export default Store