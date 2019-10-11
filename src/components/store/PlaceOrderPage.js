import React, { Component } from 'react'

import validateEmail from '../../scripts/validateEmail'

class PlaceOrderPage extends Component {

    constructor (props) {
        super (props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            street: '',
            zip: '',
            region: '',
        }

    }

    handleSubmit = () => {
        
    }

    testValidation = () => {
        console.log(this.state)
        console.log(validateEmail(this.state.email))
    }

    handleChange = ev => {
        ev.preventDefault()
        this.setState({ [ev.target.name]: ev.target.value })
    }

    isBlank = input => {
        if(input !== '') return false
        else return true
    }

    displayWarning = warningString => {
        console.log(warningString)
        return <span className="warning-string" style={styles.warningString}> {warningString} </span>
    }

    render () {

        return (

            <div className="place-order-page" style={styles.main}>

                <form onSubmit={this.handleSubmit} style={styles.form}>

                    <span style={styles.txt1}> Name </span>
                    <input
                        type='text'
                        name='name'
                        style={styles.textBox}
                        value={this.state.name}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> Email </span>
                    <input
                        type='text'
                        name='email'
                        style={styles.textBox}
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    { () => { 
                        if(
                            this.isBlank(this.state.email) && 
                            !validateEmail(this.state.email)
                        ) return this.displayWarning("Please enter a valid email.") 
                    }}

                    <span style={styles.txt1}> Phone Number </span>
                    <input
                        type='text'
                        name='phone'
                        style={styles.textBox}
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> Street Address </span>
                    <input
                        type='text'
                        name='street'
                        style={styles.textBox}
                        value={this.state.street}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> Area Code </span>
                    <input
                        type='text'
                        name='zip'
                        style={styles.textBox}
                        value={this.state.zip}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> State </span>
                    <input
                        type='text'
                        name='region'
                        style={styles.textBox}
                        value={this.state.region}
                        onChange={this.handleChange}
                    />

                    <button style={styles.button} onMouseEnter={()=>this.testValidation()}>Submit</button>

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
    },

    warningString: {
        color: 'red',
    },

}

export default PlaceOrderPage