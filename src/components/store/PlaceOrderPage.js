import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import StoreHeader from './StoreHeader'

import validateEmail from '../../scripts/ValidateEmail'
import validatePhone from '../../scripts/ValidatePhone'
import usps from '../../scripts/ValidateAddress'

import '../../css/place-order-page.css'

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
            funEndText: null,
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

    componentWillMount () {

        this.props.setHeaderLink('/cart')
        
    }

    componentDidMount () {

        this.setState({funEndText: this.funEndText()})

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

        let component = null

        if(this.validateCanSubmit()) {
            
            component = <Link to={'/order-summary'} 
                    style={styles.button}
                    className="submit-order-button"
                >
                    submit
                </Link>

        }

        return component
    }

    randomNum = max => Math.floor(Math.random() * Math.floor(max))

    funEndText = () => {
        
        const texts = [
            "(please)",
            "(pweaasee)",
            "please", 
            "pretty please",
            "(pretty please)", 
            "(plz)"
        ]

        return texts[this.randomNum(texts.length)]

    }

    render () {

        if(!this.props.cartHasItems) return <Redirect 
                to={'/merch'} 
                push={true}
            /> 

        return (

            <div className="place-order-page" style={styles.main}>

                <Helmet>

                    <meta charset="utf-8" />
                    <meta name="keywords" 
                        content="
                            northwest, 
                            northwest the band, 
                            northwest band,
                            north west, 
                            band, 
                            nwi, 
                            219, 
                            contact, 
                            email, 
                            goodies, 
                            art
                        "
                    />
                    <link rel="canonical" href="http://northwest.band" />

                    <meta name="author" content="Noah Bennett" />

                    <meta name="description" content="
                        
                    " />
                    <meta name="robots" content="noindex" />
                    <meta name="url" content="http://northwest.band/place-order" />

                    <title>northwest the band | place order </title>

                </Helmet>

                <StoreHeader textInPhoto="shipping info" />

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
                    {this.validateEmailInput(`enter a valid email ${this.state.funEndText}`)}

                    <span style={styles.txt1}> phone number </span>
                    <input
                        type='text'
                        name='phone'
                        style={styles.textBox}
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                    {this.validatePhoneInput(`enter a valid phone number ${this.state.funEndText}`)}

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
                    {this.validateAddress(`enter a valid address ${this.state.funEndText}`)}

                    {this.linkToOrderSummary()}

                </div>

            </div>

        )

    }

}

const styles = {

    main: {
        width: '100%',
        height: 'auto',
        minHeight: '100%',
        position: 'absolute',
        top: '0',
        backgroundColor: '#fff',
        color: 'hsl(0,0%,50%)',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: 'auto',
    },

    form: {
        width: '50%',
        margin: 'auto',
        marginTop: '4vh',
        marginBottom: '4vh',
        display: 'flex',
        flexDirection: 'column'
    },

    txt1: {
        marginBottom: '2.5px',
    },

    textBox: {
        padding: '10px',
        color: 'hsl(0, 0%, 50%)',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'hsl(0,0%,80%)',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        marginBottom: '15px',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: 'auto',
    },

    button: {
        color: '#69727b',
        backgroundColor: '#f7f7f7',
        width: 'auto',
        margin: 'auto',
        padding: '10px 20px',
        borderStyle: 'solid',
        borderWidth: '1px',
        borderColor: 'hsl(0,0%,80%)',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
        fontFamily: '"Work Sans",sans-serif',
        fontWeight: '400',
        fontSize: 'auto',
    },

    warningString: {
        color: 'red',
        marginTop: '-7.5px',
        marginBottom: '15px',
    },

    submit: {
        color: '#69727b',
        backgroundColor: '#f5f5f5',
        width: 'auto',
        margin: 'auto',
        padding: '10px 20px',
        border: '0',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        borderTopLeftRadius: '4px',
        borderTopRightRadius: '4px',
    }

}

export default PlaceOrderPage