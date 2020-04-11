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

    componentWillReceiveProps (nextProps) {
        
        this.setState({previewImg: nextProps.defaultImg})

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

    render () {
        
        return (
            
            <Link to={{
                    pathname: `/products/${this.props.attributes.model}`,
                }}
                className="product-preview" 
                style={{
                    width: '70%',
                    display: 'flex',
                    flexDirection: 'column',
                    flexBasis: '100%',
                    backgroundColor: 'rgba(255,255,255,1)',
                    backdropFilter: 'blur(5px)',
                    boxShadow: 'rgba(0, 0, 0, 0.07) 0px 0px 8px 2px',
                    fontFamily: '"Work Sans",sans-serif',
                    cursor: 'pointer',
                    zIndex: `${10 + this.props.zIndex}`,
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