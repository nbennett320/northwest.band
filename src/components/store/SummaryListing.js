import React, { Component } from 'react'
import '../../css/summary-listing.css'

class SummaryListing extends Component {

    render () {

        return (

            <div className="summary-listing" style={styles.container}>

                <div
                    className="summary-title" 
                    style={styles.title}
                >
                    
                    {this.props.title}

                </div>

                <ul className="summary-detail" style={styles.details}>

                    <li className="summary-attribute">size: {this.props.attributes.size}</li>
                    <li className="summary-attribute">color: {this.props.attributes.color}</li>

                </ul>

                <div className="summary-price" style={styles.price}>${this.props.price}</div>


            </div>

        )

    }

}

const styles = {
    container: {
        width: '100%',
        height: '100px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '12px',
        paddingBottom: '12px',
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        backgroundColor: '#fff',
        // borderRadius: '4px',
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
        color: '#69727b !important',
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


}

export default SummaryListing