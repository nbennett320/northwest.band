import React, { Component } from 'react'
import ImagePreview from './ImagePreview'
import Footer from '../Footer'
import ProductDetailsPanel from './ProductDetailsPanel';

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
    }

    componentDidMount () {
        const { model } = this.props.match.params

        this.setState({
            model: model,
            color: this.state.details.attributes.color
        })
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
    setDefaultAttributesByModel = model => {
        let defaultProperties = this.state.details

        switch (model) {

            case 'classic-tee':
                defaultProperties.title = 'northwest classic t-shirt'
                defaultProperties.altText = 't-shirt with classic nw box logo'
                defaultProperties.description = 't-shirt with classic nw box logo'
                defaultProperties.attributes = {
                    category: 'shirt',
                    subcategory: 'short-sleeve',
                    model: 'classic-tee',
                    color: 'black-on-white',
                    availableColors: {
                        0: 'white-on-black',
                        1: 'black-on-white',
                        2: 'red-on-white',
                        3: 'white-on-green',
                }}
                defaultProperties.price = 12
                break

            case 'suburban-dogs-tee':
                defaultProperties.title = 'northwest suburban dogs t-shirt'
                defaultProperties.altText = 't-shirt with black suburban dogs logo'
                defaultProperties.description = 't-shirt with black suburban dogs logo'
                defaultProperties.attributes = {
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
                }}
                defaultProperties.price = 12
                break

            case 'et-tee':
                defaultProperties.title = 'northwest e.t. t-shirt'
                defaultProperties.altText = 'nw tee endorsed by everyone\'s favorite extra terrestrial'
                defaultProperties.description = 'nw tee endorsed by everyone\'s favorite extra terrestrial'
                defaultProperties.attributes = {
                    category: 'shirt',
                    subcategory: 'short-sleeve',
                    model: 'et-tee',
                    color: 'white',
                    availableColors: {
                        0: 'white',
                        1: 'yellow',
                }}
                defaultProperties.price = 12
                break

            case 'suburban-dogs-hoodie':
                defaultProperties.title = 'northwest suburban dogs hoodie'
                defaultProperties.altText = 'hoodie with black suburban dogs'
                defaultProperties.description = 'hoodie with black suburban dogs'
                defaultProperties.attributes = {
                    category: 'sweatshirt',
                    subcategory: 'hoodie',
                    model: 'suburban-dogs-hoodie',
                    color: 'grey',
                    availableColors: {
                        0: 'grey',
                        1: 'orange',
                        2: 'pink',
                }}
                defaultProperties.price = 22
                break

            default:
                console.log("error in ProductPage.js")
                defaultProperties.title = 'northwest classic t-shirt'
                defaultProperties.altText = 't-shirt with classic nw box logo'
                defaultProperties.description = 't-shirt with classic nw box logo'
                defaultProperties.attributes = {
                    category: 'shirt',
                    subcategory: 'short-sleeve',
                    model: 'classic-tee',
                    color: 'black-on-white',
                    availableColors: {
                        0: 'white-on-black',
                        1: 'black-on-white',
                        2: 'red-on-white',
                        3: 'white-on-green',
                }}
                defaultProperties.price = 12
                break

        }

        this.setState({
            details: defaultProperties
        })

    }

    setColorOnProductPage = newColor => {

        let attributes = this.state.details.attributes

        attributes.color = newColor
        
        this.setState({attributes})

    }

    getColor = () => this.state.details.attributes.color

    render () {

        return (

            <div className="product-page-container" style={styles.main}>

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
                        />
                    
                    </div>

                </div>

                <div className="product-description" style={styles.containerBelowDetails}>

                    <p className="description-main-paragraph" style={styles.mainParagraph}>
                        
                        {this.getColor()} {this.state.details.description}

                    </p>



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



}

export default ProductPage