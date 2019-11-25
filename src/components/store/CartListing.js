import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import '../../css/cart-listing.css'

class CartListing extends Component {

    sizeOptions = [
        {value: 'xs', label: 'XS'},
        {value: 's', label: 'S'},
        {value: 'm', label: 'M'},
        {value: 'l', label: 'L'},
        {value: 'xl', label: 'XL'},
        {value: 'xxl', label: 'XXL'}
    ]

    handleClick = () => {

        let itemCartNumber = this.props.itemCartNumber
        this.props.removeItem(itemCartNumber)

    }

    changeSize = newSize => {
        this.props.handleSizeChange(newSize, this.props.itemCartNumber)
    }
    
    render () {

        return (

            <div className="cart-listing" style={styles.container}>

                <Link to={`/products/${this.props.model}`}
                    className="listing-title" 
                    style={styles.title}
                >
                    
                    {this.props.title}
                
                </Link>

                <ul className="listing-detail" style={styles.details}>

                    <li className="detail-entry">size: {this.props.size}</li>
                    <li className="detail-entry">color: {this.props.color}</li>

                </ul>

                

                <div className="listing-price" style={styles.price}>${this.props.price}</div>

                
                <img className="remove-from-cart-x"
                    style={styles.x}
                    onClick={this.handleClick}
                    src={require('../../img/store/x-icon-png-25.png')} alt="x icon" 
                />

            </div>

        )

    }

}

const styles = {
    container: {
        width: '80%',
        height: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '12px',
        paddingBottom: '12px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: '#f5f5f5',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: '1em',
        borderBottomWidth: '1px',
        borderBottomColor: 'hsl(0,0%,70%)',
        borderBottomStyle: 'solid',
    },

    title: {
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '30%',
    },

    details: {
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: 'auto',
        marginBottom: 'auto',
        width: '30%',
        color: '#69727b',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: '0.9em',
    },

    price: {
        color: '#69727b',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: '1.0em',
    },

    selector: {
        height: '80%',
        minWidth: '15%',
        maxWidth: '20%',
        margin: 'auto',
    },

    x: {
        height: '20px',
        width: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: 'auto',
        marginBottom: 'auto',
        cursor: 'pointer',
    },
}

export default CartListing