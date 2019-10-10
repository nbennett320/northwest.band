import React, { Component } from 'react'

class PlaceOrderPage extends Component {

    handleSubmit = () => {

    }

    handleChange = () => {

    }

    render () {

        return (

            <div className="place-order-page" style={styles.main}>

                <form onSubmit={this.handleSubmit} style={styles.form}>

                    <span style={styles.txt1}> Name </span>
                    <input
                        type='name'
                        name='name'
                        style={styles.textBox}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> Email </span>
                    <input
                        type='email'
                        name='email'
                        style={styles.textBox}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> Phone Number </span>
                    <input
                        type='phone'
                        name='phone'
                        style={styles.textBox}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> Street Address </span>
                    <input
                        type='address'
                        name='address'
                        style={styles.textBox}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> Area Code </span>
                    <input
                        type='zip'
                        name='zip'
                        style={styles.textBox}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> State </span>
                    <input
                        type='state'
                        name='state'
                        style={styles.textBox}
                        onChange={this.handleChange}
                    />

                    <button style={styles.button}>Submit</button>

                </form>

            </div>

        )

    }

}

const styles = {

    main: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: '0',
        backgroundColor: '#f2d880',
        fontFamily: 'Arial, Helvetica, sans-serif',
    },

    form: {
        width: '50%',
        margin: 'auto',
        marginTop: '15vh',
        display: 'flex',
        flexDirection: 'column'
    },

    txt1: {
        marginBottom: '2.5px',
    },

    textBox: {
        padding: '10px',
        border: '0',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        marginBottom: '15px',
    },

    button: {
        backgroundColor: '#fbf2d4',
        width: 'auto',
        margin: 'auto',
        padding: '10px',
        border: '0',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
    }

}

export default PlaceOrderPage