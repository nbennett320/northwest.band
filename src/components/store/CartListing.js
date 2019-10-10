import React, { Component } from 'react'
import Select from 'react-select'

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

        const itemCartNumber = this.props.itemCartNumber
        this.props.removeItem(itemCartNumber)

    }

    changeSize = newSize => {
        this.props.handleSizeChange(newSize, this.props.itemCartNumber)
    }
    
    render () {

        return (

            <div className="cart-listing" style={styles.container}>

                <div className="listing-title" style={styles.title}>{this.props.title}</div>

                <div style={styles.selector}>
                    <Select options={this.sizeOptions}
                        placeholder="Size"
                        onChange={this.changeSize}
                    />
                </div>

                <div className="listing-price" style={styles.price}>${this.props.price}</div>

                <div className="remove-from-cart-x" style={styles.x} onClick={this.handleClick}>
                    <img src={require('../../img/store/x-icon-png-25.png')} alt="x icon"/>
                </div>

            </div>

        )

    }

}

const styles = {
    container:{
        width: '80%',
        height: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        marginBottom: '20px',
        paddingTop: '7.5px',
        paddingBottom: '7.5px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: '10px',
    },

    title: {
        marginLeft: '20px',
        marginTop: 'auto',
        marginBottom: 'auto',
    },

    price: {
        marginLeft: 'auto',
        marginRight: '20px',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: '1.2em',
    },

    selector: {
        height: '80%',
        minWidth: '15%',
        maxWidth: '20%',
        margin: 'auto',
    },

    x: {
        marginLeft: '20px',
        marginRight: '20px',
        marginTop: 'auto',
        marginBottom: 'auto',
        transform: 'scale(0.5)',
        cursor: 'pointer',
    },
}

export default CartListing