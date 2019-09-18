import React, { Component } from 'react'
import Select from 'react-select'

class CartListing extends Component {

    sizeOptions = [
        {value: 'xs', label: 'XS'},
        {value: 's', label: 'S'},
        {value: 'm', label: 'M'},
        {value: 'l', label: 'L'},
        {value: 'xl', label: 'XL'}
    ]
    
    render () {

        console.log(this.props)

        return (

            <div className="cart-listing" style={styles.container}>

                <div className="listing-title" style={styles.title}>{this.props.title}</div>

                <div style={styles.selector}>
                    <Select options={this.sizeOptions}
                        placeholder="Size"
                        size='5'
                    />
                </div>

                <div className="listing-price" style={styles.price}>${this.props.price}</div>

            </div>

        )

    }

}

const styles = {
    container:{
        width: '80%',
        height: '100%',
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
        // backdropFilter: 'blur(5px)',
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
    },

    selector: {
        height: '80%',
        minWidth: '15%',
        maxWidth: '20%',
        margin: 'auto',
    },
}

export default CartListing