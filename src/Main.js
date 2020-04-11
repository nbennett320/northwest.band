import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/home/Home'
import Music from './pages/music/Music'
import Lyrics from './pages/music/Lyrics'
import Merch from './pages/merch/Merch'
// import ProductPage from './components/store/ProductPage'
import Goodies from './Goodies'
import ScrollToTop from './scripts/ScrollToTop'
import ViewCartPage from './components/store/ViewCartPage'
import PlaceOrderPage from './components/store/PlaceOrderPage'
import OrderSummary from './components/store/OrderSummary'
import Contact from './Contact'
import Admin from './Admin'
import NoMatch from './NoMatch'

import './css/App.css'

// query device size
const mql = window.matchMedia(`(max-width: 633px)`)
const vpWidth = window.innerWidth
const vpHeight = window.innerHeight

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vpWidth,
            vpHeight,
            isMobile: mql.matches,

            headerLink: '..',
            showCart: false,
            numberOfItemsInCart: 0,
            itemsInCart: [],
            cartHasItems: false,
            itemDetails: [],
            totalPrice: 0,
            orderInfo: {
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
    }

    setHeaderLink = link => this.setState({headerLink: link})

    setShowCart = bool => {
        this.setState({
            showCart: bool,
        })
    }

    addItemToCart = item => {
        let items = this.state.itemsInCart

        items.push(item)

        let cartHasItems = this.cartHasItems(items.length)

        this.setState({
            itemsInCart: items,
            numberOfItemsInCart: items.length,
            cartHasItems: cartHasItems,
        })

    }

    setTotalPrice = total => {
        let totalPrice = total
        this.setState({
            totalPrice: totalPrice,
        })
    }

    cartHasItems = numOfItemsInCart => {
        if (numOfItemsInCart > 0) {
            return true
        } else return false
    }

    removeItem = itemNumber => {
        let items = this.state.itemsInCart
        if(items.length === 1) items.pop()
        else items.splice(itemNumber, 1)
        let cartHasItems = this.cartHasItems(items.length)
        this.setState({
            itemsInCart: items,
            numberOfItemsInCart: items.length,
            cartHasItems: cartHasItems,
        })
    }

    getNumberOfItemsInCart = () => this.state.numberOfItemsInCart

    setItemDetails = item => {
        this.setState({
            itemDetails: item
        })
    }

    setFullAddress = fullAddress => this.setState({orderInfo: {fullAddress: fullAddress}})

    setOrderInfo = (name, email, phone, street, city, zip, region, fullAddress) => {
        this.setState({
            orderInfo: {
                name: name,
                email: email,
                phone: phone,
                street: street,
                city: city,
                zip: zip,
                region: region,
                fullAddress: fullAddress,
            }
        })
    }

    render() {
        return (
            <Router>
                <ScrollToTop>
                    <Header
                        headerLink={this.state.headerLink}
                        showCart={this.state.showCart}
                        setShowCart={this.setShowCart}
                        numberOfItemsInCart={this.state.numberOfItemsInCart}
                    />

                    <Switch>
                        <Route exact path='/'
                            render={props => <Home
                                {...props}
                                device={{
                                    vpWidth: this.state.vpWidth,
                                    vpHeight: this.state.vpHeight,
                                    isMobile: this.state.isMobile,
                                }}
                            />}
                        />

                        <Redirect 
                            from='/home'
                            to='/'
                        />

                        {/* redirect from /songs/ to /music for cases where user tries
                        to link there directly */}
                        <Redirect
                            from='/music/:key'
                            to='/songs/:key'
                        />

                        <Route path='/music' 
                            render={(props) => <Music 
                                {...props} 
                                device={{
                                    vpWidth: this.state.vpWidth,
                                    vpHeight: this.state.vpHeight,
                                    isMobile: this.state.isMobile,
                                }}
                                setHeaderLink={this.setHeaderLink}
                            />}
                        />

                        <Route path='/songs/:key'
                            render={(props) => <Lyrics 
                                {...props} 
                                setHeaderLink={this.setHeaderLink}
                            />}
                        
                        />

                        {/* redirect from /songs/ to /music for cases where user tries
                        to link there directly */}
                        <Redirect 
                            from='/songs'
                            to='/music'
                        />

                        <Route path='/merch' 
                            render={(props) => <Merch 
                                {...props}
                                setHeaderLink={this.setHeaderLink}
                                // setShowCart={this.setShowCart}
                                // addItemToCart={this.addItemToCart}
                                // setItemDetails={this.setItemDetails}
                                // setHeaderLink={this.setHeaderLink}
                            />}
                        />

                        {/* redirect from /merch/* to /merch for cases where user tries
                        to link there directly */}
                        <Redirect 
                            from='/merch/*'
                            to='/merch'
                        />

                        {/* <Route path='/products/:model' 
                            render={(props) => <ProductPage 
                                {...props} 
                                setShowCart={this.setShowCart}
                                addItemToCart={this.addItemToCart}
                                itemDetails={this.state.itemDetails}
                                setHeaderLink={this.setHeaderLink}
                            />}
                        /> */}

                        {/* redirect from /products/ to /merch for cases where user tries
                        to link there directly */}
                        <Redirect 
                            from='/products'
                            to='/merch'
                        />

                        {/* redirect from /products/* to /merch for cases where user tries
                        to link there directly */}
                        <Redirect 
                            from='/products/*'
                            to='/merch'
                        />

                        <Route path='/goodies' 
                            render={(props) => <Goodies 
                                {...props} 
                                setHeaderLink={this.setHeaderLink}
                            />}
                        />

                        <Route path='/cart' 
                            render={(props) => <ViewCartPage 
                                {...props}
                                itemsInCart={this.state.itemsInCart}
                                numberOfItemsInCart={this.getNumberOfItemsInCart()}
                                cartHasItems={this.state.cartHasItems}
                                setShowCart={this.setShowCart}
                                removeItem={this.removeItem}
                                totalPrice={this.state.totalPrice}
                                setTotalPrice={this.setTotalPrice}
                                setHeaderLink={this.setHeaderLink}
                            />} 
                        />

                        <Route path='/place-order' 
                            render={(props) => <PlaceOrderPage
                                {...props} 
                                itemsInCart={this.state.itemsInCart}
                                cartHasItems={this.state.cartHasItems}
                                totalPrice={this.state.totalPrice}
                                setFullAddress={this.setFullAddress}
                                setOrderInfo={this.setOrderInfo}
                                setHeaderLink={this.setHeaderLink}
                            />} 
                        />

                        <Route path='/order-summary'
                            render={(props) => <OrderSummary
                                {...props} 
                                itemsInCart={this.state.itemsInCart}
                                cartHasItems={this.state.cartHasItems}
                                totalPrice={this.state.totalPrice}
                                fullAddress={this.state.orderInfo.fullAddress}
                                orderInfo={this.state.orderInfo}
                                setHeaderLink={this.setHeaderLink}
                            />} 
                        />

                        <Route path='/contact'
                            render={(props) => <Contact
                                {...props} 
                                setHeaderLink={this.setHeaderLink}
                                setShowCart={this.setShowCart}
                            />} 
                        />

                        <Route path='/admin'
                            render={(props) => <Admin
                                {...props} 
                                setHeaderLink={this.setHeaderLink}
                            />} 
                        />

                        {/* catch all unknown routes (error 404) */}
                        <Route path='/*'
                            render={(props) => <NoMatch
                                {...props} 
                                setHeaderLink={this.setHeaderLink}
                            />} 
                        />

                    </Switch>
                </ScrollToTop>
            </Router>
        )
    }
}

export default Main