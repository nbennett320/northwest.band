import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../css/store.css'

class ItemPreview extends Component {

    constructor(props) {
        super (props)

        this.state = {
            previewImg: this.props.defaultImg,
            isHovering: false,
            itemDetails: {},
        }

    }

    handleAddToCart = () => {
        this.props.addItemToCart(this.props)
        
    }

    handleMouseEnter = () => {
        this.setState({
            previewImg: this.props.hoverImg,
            isHovering: true,
        })
    }

    handleMouseLeave = () => {
        this.setState({
            previewImg: this.props.defaultImg,
            isHovering: true,
        })
    }

    setProductPage = () => {
        let details = {
            title: this.props.title,
            altText: this.props.altText,
            description: this.props.description,
            attributes: {
                category: this.props.attributes.category,
                subcategory: this.props.attributes.subcategory,
                model: this.props.attributes.model,
                color: this.props.attributes.color,
                size: this.props.attributes.size,
            },
            price: this.props.price
        }

        this.props.setItemDetails(details)

        this.setState({
            itemDetails: details
        })
    }

    getPreviewImg = () => {
        if(this.state.isHovering === true) return this.props.hoverImg
        else return this.props.defaultImg
    }

    render () {
        
        return (
            
            <Link to={{
                    pathname: `/products/${this.props.attributes.model}`,
                }}
                className="product-preview" 
                style={styles.card}
                onClick={this.setProductPage}
                params={{ 
                    model: this.props.attributes.model,
                    itemDetails: this.state.itemDetails
                }}
            >

                <img className="product-img"
                    src={this.state.previewImg}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                    alt={this.props.altText}
                    style={styles.previewImage}
                />
                
                <div className="preview-card"
                    style={styles.previewCard}
                >

                    <div>{this.props.title}</div>

                    <div className="price-preview" 
                        style={styles.price}
                        onClick={this.handleAddToCart}
                    >
                        <div className="price-text"
                            style={{padding: '10px 0', 
                                textDecoration: 'none !important',
                                textDecorationColor: '#69727b !important',
                            }}
                        >
                            ${this.props.price}
                        </div>
                    </div>

                </div>

            </Link>

        )

    }

}

const styles = {

    card: {
        backgroundColor: 'rgba(255,255,255,1)',
        backdropFilter: 'blur(5px)',
        boxShadow: '0px 6px 6px 6px rgba(0,0,0,0.1)',
        // height: 'calc(auto + 35px + 1en)',
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        fontFamily: '"Work Sans",sans-serif',
        cursor: 'pointer',
    },

    previewCard: {
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingLeft: '5%',
        paddingRight: '5%',
    },

    previewImage: {
        width: '90%',
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: '',
    },

    description: {
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '5%',
        paddingBottom: '5%',
        fontSize: '0.8em',
    },

    price: {
        color: '#fff',
        paddingTop: '5px',
        paddingBottom: '5px',
        textAlign: 'left',
        textDecoration: 'none !important',
    }

}

export default ItemPreview