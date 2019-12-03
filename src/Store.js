import React, { Component } from 'react'
import ItemPreview from './components/store/ItemPreview'
import StoreHeader from './components/store/StoreHeader'
import FilterStore from './components/store/FilterStore'
import Footer from './components/Footer'

class Store extends Component {

    state = {
        randomNum: null,
        filterScope: 'subcategory',
        filterType: 'short-sleeve',
    }

    componentWillMount () {

        this.props.setHeaderLink('/')

    }

    componentDidMount() {

        this.props.setShowCart(true)

    }

    randomNum = max => Math.floor(Math.random() * Math.floor(max))

    randomETStyleImg = () => {
        const colors = [
            'white',
            'yellow'
        ]

        return colors[this.randomNum(colors.length)]
    }

    randomSDHoodieStyleImg = () => {
        const colors = [
            'pink',
            'orange',
            'grey',
        ]

        return colors[this.randomNum(colors.length)]
    }

    randomSDStyleImg = () => {
        const colors = [
            'eggshell',
            'hot-pink',
            'orange',
            'vintage-rose',
            'yellow'
        ]

        return colors[this.randomNum(colors.length)]
    }

    randomClassicStyleImg = () => {
        const colors = [
            'white-on-black',
            'black-on-white',
            'red-on-white',
            'white-on-green',
        ]

        return colors[this.randomNum(colors.length)]
    }

    items = {

        0: {
            title: 'northwest classic t-shirt',
            defaultImg: `${require(`./img/img_merch/img_500x500/classic-black-on-white.png`)}`,
            hoverImg: `${require(`./img/img_merch/img_500x500/classic-${this.randomClassicStyleImg()}.png`)}`,
            altText: 't-shirt with classic nw box logo',
            description: 't-shirt with classic nw box logo',
            attributes: {
                category: 'shirt',
                subcategory: 'short-sleeve',
                model: 'classic-tee',
                color: 'black-on-white',
                availableColors: {
                    0: 'white-on-black',
                    1: 'black-on-white',
                    2: 'red-on-white',
                    3: 'white-on-green',
                },
                size: '',
            },
            price: 12
        },

        1: {
            title: 'northwest suburban dogs t-shirt',
            defaultImg: `${require(`./img/img_merch/img_500x500/eggshellsd.png`)}`,
            hoverImg: `${require(`./img/img_merch/img_500x500/${this.randomSDStyleImg()}sd.png`)}`,
            altText: 't-shirt with black suburban dogs logo',
            description: 't-shirt with black suburban dogs logo',
            attributes: {
                category: 'shirt',
                subcategory: 'short-sleeve',
                model: 'suburban-dogs-tee',
                color: 'eggshell',
                availableColors: {
                    0: 'hot-pink',
                    1: 'orange',
                    2: 'vintage-rose', 
                    3: 'eggshell',
                    4: 'yellow',
                },
                size: '',
            },
            price: 12
        },

        2: {
            title: 'northwest e.t. t-shirt',
            defaultImg: `${require(`./img/img_merch/img_500x500/whiteet.png`)}`,
            hoverImg: `${require(`./img/img_merch/img_500x500/${this.randomETStyleImg()}et.png`)}`,
            altText: 'nw tee endorsed by everyone\'s favorite extra terrestrial',
            description: 'nw tee endorsed by everyone\'s favorite extra terrestrial',
            attributes: {
                category: 'shirt',
                subcategory: 'short-sleeve',
                model: 'et-tee',
                color: 'white',
                availableColors: {
                    0: 'white',
                    1: 'yellow',
                },
                size: '',
            },
            price: 12
        },

        3: {
            title: 'northwest suburban dogs hoodie',
            defaultImg: `${require('./img/img_merch/img_500x500/grey hoodie.png')}`,
            hoverImg: `${require(`./img/img_merch/img_500x500/${this.randomSDHoodieStyleImg()} hoodie.png`)}`,
            altText: 'grey hoodie with black suburban dogs',
            description: 'grey hoodie with black suburban dogs',
            attributes: {
                category: 'sweatshirt',
                subcategory: 'hoodie',
                model: 'suburban-dogs-hoodie',
                color: 'grey',
                availableColors: {
                    0: 'grey',
                    1: 'orange',
                    2: 'pink',
                },
                size: '',
            },
            price: 22
        },

    }

    setFilterScope = scope => this.setState({filterScope: scope})

    setFilterType = type => this.setState({filterType: type})

    // filter items by subcategory or model
    filterBy = (items, filter) => {

        const scope = this.state.filterScope
        let catalog = []

        for(let i = 0; i < Object.keys(items).length; i++) {

            if(items[i].props.attributes[scope] == filter) {

                catalog.push(items[i])

            }

        }

        return catalog

    }

    mapCatalog = filter => {

        console.log(filter)

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
                setItemDetails={this.props.setItemDetails}
            />)

        }

        catalog = this.filterBy(catalog, filter)

        return catalog

    }

    render() {

        return (

            <div className="merch" style={styles.main}>

                <StoreHeader textInPhoto="northwest merchies :)" />

                <FilterStore 
                    setFilterScope={this.setFilterScope}
                    setFilterType={this.setFilterType}
                />

                {this.mapCatalog(this.state.filterType)}

                <Footer />

            </div>

        )

    }

}

const styles = {

    main: {
        width: '100%',
        height: 'auto',
        // minHeight: '100%',
        backgroundColor: '#fafafa',
        display: 'flex',
        top: '0',
        position: 'absolute',
        flexDirection: 'row',
        alignContent: 'flex-start',
        flexWrap: 'wrap',
    }

}

export default Store