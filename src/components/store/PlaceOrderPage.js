import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import validateEmail from '../../scripts/ValidateEmail'
import validatePhone from '../../scripts/ValidatePhone'
import usps from '../../scripts/ValidateAddress'

class PlaceOrderPage extends Component {

    constructor (props) {
        super (props)

        this.state = {
            name: '',
            email: '',
            phone: '',
            street: '',
            city: '',
            zip: '',
            region: '',
            fullAddress: '',
        }

    }

    componentWillUnmount () {
        if(this.state.fullAddress !== '') {
            this.props.setOrderInfo(
                this.state.name,
                this.state.email,
                this.state.phone,
                this.state.street,
                this.state.city,
                this.state.region,
                this.state.zip,
                this.state.fullAddress
            )
        }
    }

    validateCanSubmit = () => {
        if(
            this.state.name === '' || 
            this.state.email === '' || 
            this.state.phone === '' || 
            this.state.fullAddress === ''
        ) { 
            return false
        }
        else if(
            this.state.name !== '' && 
            this.state.email !== '' && 
            this.state.phone !== '' && 
            this.state.fullAddress !== ''
        ) {
            return true
        }
    }

    handleHoverOverSubmit = warningString => {
        this.validateAddress(warningString)
        this.validateCanSubmit()
    }

    handleChange = ev => {
        ev.preventDefault()
        this.setState({ [ev.target.name]: ev.target.value } )
    }

    isBlank = input => {
        if(input !== '') return false
        else return true
    }

    displayWarning = warningString => <span className="warning-string" style={styles.warningString}> {warningString} </span>

    validateEmailInput = warningString => { 
        if(
            !this.isBlank(this.state.email) && 
            !validateEmail(this.state.email)
        ) {
            return this.displayWarning(warningString)
        }
    }

    validatePhoneInput = warningString => { 
        if(
            !this.isBlank(this.state.phone) && 
            !validatePhone(this.state.phone)
        ) {
            return this.displayWarning(warningString)
        }
    }

    // warning cant do state update to non rendered component is coming from => else this.setState
    validateAddress = warningString => {
        usps.verify({
            street1: this.state.street,
            city: this.state.city,
            state: this.state.region
        }, (err, address) => {
            if(err) return this.displayWarning(warningString)
            else this.setState({fullAddress: address})
        })
    }

    linkToOrderSummary = () => {
        if(this.validateCanSubmit()) {
            // this.props.setFullAddress(this.state.fullAddress)
            return '/order-summary'
        } else return '/place-order'
    }

    render () {

        const showSubmitButton = () => {
            if(this.state.fullAddress !== '') return 'inherit'
            else return 'none'
        }

        let submit = {
            color: '#000',
            backgroundColor: '#f0f0f0',
            width: 'auto',
            margin: 'auto',
            padding: '10px',
            border: '0',
            borderBottomLeftRadius: '10px',
            borderBottomRightRadius: '10px',
            borderTopLeftRadius: '10px',
            borderTopRightRadius: '10px',
            display: showSubmitButton(),
        }

        return (

            <div className="place-order-page" style={styles.main}>

                <div style={styles.form}>

                    <span style={styles.txt1}> name </span>
                    <input
                        type='text'
                        name='name'
                        style={styles.textBox}
                        value={this.state.name}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> email </span>
                    <input
                        type='text'
                        name='email'
                        style={styles.textBox}
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    {this.validateEmailInput("Please enter a valid email")}

                    <span style={styles.txt1}> phone number </span>
                    <input
                        type='text'
                        name='phone'
                        style={styles.textBox}
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    {this.validatePhoneInput("Please enter a valid phone number")}

                    <span style={styles.txt1}> street address </span>
                    <input
                        type='text'
                        name='street'
                        style={styles.textBox}
                        value={this.state.street}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> city </span>
                    <input
                        type='text'
                        name='city'
                        style={styles.textBox}
                        value={this.state.city}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> state </span>
                    <input
                        type='text'
                        name='region'
                        style={styles.textBox}
                        value={this.state.region}
                        onChange={this.handleChange}
                    />

                    <span style={styles.txt1}> area code </span>
                    <input
                        type='text'
                        name='zip'
                        style={styles.textBox}
                        value={this.state.zip}
                        onChange={this.handleChange}
                    />
                    {this.validateAddress("Please enter valid address parameters")}

                    <Link to={this.linkToOrderSummary()} 
                        style={styles.button} 
                    >
                        <div style={submit}>submit</div>
                    </Link>

                </div>

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
        backgroundColor: '#f5f5f5',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '600',
        fontSize: 'auto',
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
        color: '#000',
        backgroundColor: '#f7f7f7',
        width: 'auto',
        margin: 'auto',
        padding: '10px',
        border: '0',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopLeftRadius: '10px',
        borderTopRightRadius: '10px',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '300',
        fontSize: 'auto',
    },

    warningString: {
        color: 'red',
        marginTop: '-7.5px',
        marginBottom: '15px',
    },

}

export default PlaceOrderPage