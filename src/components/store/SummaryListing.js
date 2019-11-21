import React, { Component } from 'react'

class SummaryListing extends Component {

    render () {

        return (

            <div className="summary-listing" style={styles.container}>

                <div className="summary-title" style={styles.title}>{this.props.title}</div>
                <div className="summary-details" style={styles.details}>
                    <div className="summary-attribute" >color: {this.props.attributes.color}</div>
                    <div className="summary-attribute" >size: {this.props.attributes.size}</div>
                    <div className="summary-attribute" >price: ${this.props.price}</div>
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
        marginTop: '10px',
        marginBottom: '10px',
        paddingTop: '7.5px',
        paddingBottom: '7.5px',
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: '10px',
    },

    title: {
        marginLeft: '20px',
        marginTop: 'auto',
        marginBottom: 'auto',
    },

    details: {
        marginLeft: '20px',
        marginTop: 'auto',
        marginBottom: 'auto',
    },

    price: {
        marginLeft: '20px',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        fontSize: '1.2em',
    },
}

export default SummaryListing