import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import ImagePreview from './ImagePreview'
import Footer from '../Footer'
import ProductDetailsPanel from './ProductDetailsPanel';
import SuggestionBar from './SuggestionBar'
import BuildCatalog from '../../Catalog'

import '../../css/product-page.css'

class ProductPage extends Component {

    constructor(props) {
        super (props)

        this.state = {
            model: null,
            details: {
                title: null,
                altText: null,
                description: null,
                attributes: {
                    category: null,
                    subcategory: null,
                    model: null,
                    size: null,
                    style: null,
                    color: null,
                    availableColors: {},
                },
                price: null
            },
        }

    }

    componentWillMount () {

        const { model } = this.props.match.params

        this.setDefaultAttributesByModel(model)

        // make shure cart is shown
        this.props.setShowCart(true)

        this.props.setHeaderLink('/merch')

    }

    componentDidMount () {

        const { model } = this.props.match.params
        
        this.setState({
            model: model,
            color: this.state.details.attributes.color
        })
        
    }

    // adjust item on page if user clicks suggestion page
    componentDidUpdate (prevProps) {

        if (this.props.location !== prevProps.location) {

            this.onRouteChanged();

        }

    }

    onRouteChanged () {

        const { model } = this.props.match.params

        this.setState({
            model: model,
            color: this.state.details.attributes.color,
        })

        this.setDefaultAttributesByModel(model)

    }

    // if props are passed, assign attributes
    // .........
    // i guess i didnt need this function OWO 
    
    // assignAttributesByProps = () => {
    //
    //     let newProperties = this.props.itemDetails
    //     this.setState({details: newProperties})
    //
    // }


    // this function basically chooses default attributes based on the url entered 
    // by the user so shit isnt fudged up if they share a link or go directly to
    // the url of an item
    // this will easily be replaced with a database as soon as im done being dumb as shit
 

    setColorOnProductPage = newColor => {

        let attributes = this.state.details.attributes

        attributes.color = newColor
        
        this.setState({attributes})

    }

    filterItemsForSuggestions = () => {

        const items = BuildCatalog
        const itemStyle = this.state.details.attributes.style
        const itemSubcategory = this.state.details.attributes.subcategory
        const currentItem = this.state.details.attributes.model

        let suggestions = []

        for(let i = 0; i < Object.keys(items).length; i++) {

            if((
                items[i].attributes.style === itemStyle ||
                items[i].attributes.subcategory === itemSubcategory) &&
                items[i].attributes.model !== currentItem
            ) {

                suggestions.push(items[i])

            }

        }

        return suggestions

    }

    getColor = () => this.state.details.attributes.color

    setSuggestionBarNeedsUpdate = bool => this.setState({suggestionBarNeedsUpdate: bool})

    descriptionColor = color => {

        if(color !== 'N/A') return color
        else return

    }

    render () {

        return (

            <div className="product-page-container" style={styles.main}>

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

                    <meta name="description" content={`
                        A ${this.state.details.attributes.color} ${this.state.details.description}.
                    `} />
                    <meta name="robots" content="index" />
                    <meta name="url" content={`http://northwest.band/products/${this.state.model}`} />

                    <title>northwest the band | {this.state.details.title}</title>

                </Helmet>

                <div className="product-page-details-container" style={styles.detailsContainer}>

                    <div className="half-container">

                        <ImagePreview 
                            color={this.getColor()}
                            availableColors={this.state.details.attributes.availableColors}
                            model={this.state.model}
                            setColorOnProductPage={this.setColorOnProductPage}
                        />

                    </div>

                    <div className="half-container">      

                        <ProductDetailsPanel
                            title={this.state.details.title}
                            price={this.state.details.price}
                            availableColors={this.state.details.attributes.availableColors}
                            item={this.state.details}
                            addItemToCart={this.props.addItemToCart}
                            setColorOnProductPage={this.setColorOnProductPage}
                            getColor={this.getColor()}
                            location={this.props.location}
                        />
                    
                    </div>

                </div>

                <div className="product-description" style={styles.containerBelowDetails}>

                    <p className="description-main-paragraph" style={styles.mainParagraph}>
                        
                        {this.descriptionColor(this.getColor())} {this.state.details.description}

                    </p>

                </div>

                <SuggestionBar
                    filteredItems={this.filterItemsForSuggestions()}
                    setDefaultAttributesByModel={this.setDefaultAttributesByModel}
                />
                
                <div style={styles.backToMerch}>

                <Link to='/merch' 
                    style={styles.button}
                    className="button-back-to-merch"
                >

                    (back to merch page)

                </Link>

                </div>

                <Footer />
                
            </div>

        )

    }

}

const styles = {

    main: {
        top: '0',
        position: 'absolute',
        paddingTop: 'calc(5vh + 40px)',
        marginTop: '5vh',
        width: '100%',
        height: 'auto',
        minHeight: '60%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    detailsContainer: {
        width: '100%',
        display: 'flex',
    },

    containerBelowDetails: {
        width: '75%',
        paddingTop: '40px',
        paddingBottom: '40px',
        marginLeft: '12.5%',
        marginRight: '12.5%',
    },

    mainParagraph: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: '#69727b',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: '1em',
    },

    backToMerch: {
        width: '100%',
        marginTop: '20px',
        marginBottom: '20px',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'flex',
        alignContent: 'center',
    },

    button: {
        color: '#69727b',
        backgroundColor: '#fff',
        width: 'auto',
        margin: 'auto',
        padding: '10px 20px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'hsl(0,0%,80%)',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: 'auto',
    },

}

export default ProductPage