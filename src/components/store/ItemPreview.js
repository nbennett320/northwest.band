import React, { Component } from 'react'

import '../../css/store.css'

class ItemPreview extends Component {

    constructor(props) {
        super (props)

        this.state = {
            previewImg: this.props.defaultImg,
            isHovering: false,
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

    getPreviewImg = () => {
        if(this.state.isHovering === true) return this.props.hoverImg
        else return this.props.defaultImg
    }

    render () {
        
        return (
            
            <div className="product-preview" style={styles.card}>
                <div className="preview-header" style={styles.cardHeader}>{this.props.title}</div>
                    <img className="product-img"
                        src={this.state.previewImg}
                        onMouseEnter={this.handleMouseEnter}
                        onMouseLeave={this.handleMouseLeave}
                        alt={this.props.altText}
                        style={styles.previewImage}
                    />
                <p className="preview-description" style={styles.description}>{this.props.description}</p>
                <div className="price-preview" 
                    style={styles.price}
                    onClick={this.handleAddToCart}
                >
                    add to cart...............${this.props.price}
                    <br />
                    (COMING SOON)
                </div>
            </div>

        )

    }

}

const styles = {

    card: {
        // backgroundColor: '#e8e1b3',
        backgroundColor: 'rgba(255,255,255,0.8)',
        backdropFilter: 'blur(5px)',
        boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.1)',
        width: '70%',
        maxWidth: '400px',
        marginTop: '5%',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto', 
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Arial, Helvetica, sans-serif',
    },

    cardHeader: {
        // backgroundColor: '#242424',
        backgroundColor: 'rgba(36, 36, 36, 0.8)',
        color: '#fff',
        width: '100%',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '5px',
        paddingBottom: '5px',

    },

    previewImage: {
        width: '90%',
        marginTop: '5%',
        marginBottom: '5%',
        marginLeft: '5%',
        marginRight: '5%',
        borderRadius: '',
        boxShadow: '0px 0px 4px 1px rgba(0,0,0,0.1)',
    },

    description: {
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '5%',
        paddingBottom: '5%',
        fontSize: '0.8em',
    },

    price: {
        // backgroundColor: '#154d3a',
        backgroundColor: 'rgba(21, 77, 58, 0.9)',
        color: '#fff',
        paddingTop: '5px',
        paddingBottom: '5px',
        paddingLeft: '5%',
        paddingRight: '5%',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        fontSize: '0.8em',
        textAlign: 'center',
    }


}

export default ItemPreview