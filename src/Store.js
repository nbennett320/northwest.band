import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import ItemPreview from './components/store/ItemPreview'
import StoreHeader from './components/store/StoreHeader'
import FilterStore from './components/store/FilterStore'
import Footer from './components/Footer'
import BuildCatalog from './Catalog'

class Store extends Component {

    state = {
        randomNum: null,
        filterScope: 'none',
        filterType: 'none',
    }

    componentWillMount () {

        this.props.setHeaderLink('/')

    }

    componentDidMount() {

        this.props.setShowCart(true)

    }

    setFilterScope = scope => this.setState({filterScope: scope})

    setFilterType = type => this.setState({filterType: type})

    // filter items by subcategory or model
    filterBy = (items, filter) => {

        const scope = this.state.filterScope
        let catalog = []

        for(let i = 0; i < Object.keys(items).length; i++) {

            if(items[i].props.attributes[scope] === filter) {

                catalog.push(items[i])

            }

        }

        return catalog

    }

    mapCatalog = filter => {

        const items = BuildCatalog

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
                zIndex={i}
            />)

        }

        if(this.state.filterType !== 'none' && 
            this.state.filterScope !== 'none') catalog = this.filterBy(catalog, filter)

        return catalog

    }
 
    makePretty = string => string.replace('-', ' ')

    getStoreHeaderText = () => {

        let text

        if(this.state.filterScope === 'none' || 
            this.state.filterType === 'none') text = "northwest merchies :)"
        else if(this.state.filterScope === 'subcategory') text = "northwest " + this.makePretty(this.state.filterType) + "s"
        else if(this.state.filterScope === 'style') text = this.makePretty(this.state.filterType) + " merch"
        else text = "northwest merchies :)"

        return text

    }

    render() {

        return (

            <div className="merch" style={styles.main}>

                <Helmet>

                    <meta charset="utf-8" />
                    <meta name="keywords" 
                        content="
                            northwest, 
                            northwest the band, 
                            northwest band,
                            music, 
                            band, 
                            merch, 
                            merchandise, 
                            clothing, 
                            screen print, 
                            band tees, 
                        "
                    />
                    <link rel="canonical" href="http://northwest.band" />

                    <meta name="author" content="Noah Bennett" />

                    <meta name="description" content="
                        Northwest shirts, hoodies, physical music and more.
                    " />
                    <meta name="robots" content="index" />
                    <meta name="url" content="http://northwest.band/merch" />

                    <title>northwest the band | shirts, hoodies, and more</title>

                </Helmet>

                <StoreHeader textInPhoto={this.getStoreHeaderText()} />

                <FilterStore 
                    setFilterScope={this.setFilterScope}
                    setFilterType={this.setFilterType}
                    currentScope={this.state.filterScope}
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