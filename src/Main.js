import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router-dom'

import Header from './components/Header'
import Home from './Home'
import Music from './Music'
import Lyrics from './Lyrics'
import Store from './Store'
import ProductPage from './components/store/ProductPage'
import Goodies from './Goodies'
import ScrollToTop from './scripts/ScrollToTop'
import ViewCartPage from './components/store/ViewCartPage'
import PlaceOrderPage from './components/store/PlaceOrderPage';
import OrderSummary from './components/store/OrderSummary'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {

            headerLink: 'http://www.instagram.com/northwest219',
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

        console.log(this.state.itemsInCart)

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

                        <Route exact path='/' component={Home} />

                        <Route path='/music' render={(props) => <Music {...props} />} />

                        <Route path='/swmtn' render={(props) => <Lyrics {...props} songKey="swmtn" />} />
                        <Route path='/lover' render={(props) => <Lyrics {...props} songKey="lover" />} />
                        <Route path='/rendezvous' render={(props) => <Lyrics {...props} songKey="rendezvous" />} />
                        <Route path='/flake' render={(props) => <Lyrics {...props} songKey="flake" />} />
                        <Route path='/fader' render={(props) => <Lyrics {...props} songKey="fader" />} />
                        <Route path='/quink' render={(props) => <Lyrics {...props} songKey="quink" />} />
                        <Route path='/new-feel' render={(props) => <Lyrics {...props} songKey="newfeel" />} />
                        <Route path='/come-around' render={(props) => <Lyrics {...props} songKey="comearound" />} />

                        <Route path='/merch' 
                            render={(props) => <Store 
                                {...props} 
                                setShowCart={this.setShowCart}
                                addItemToCart={this.addItemToCart}
                                setItemDetails={this.setItemDetails}
                            />}
                        />

                        <Route path='/products/:model' 
                            render={(props) => <ProductPage 
                                {...props} 
                                setShowCart={this.setShowCart}
                                addItemToCart={this.addItemToCart}
                                itemDetails={this.state.itemDetails}
                            />}
                        />

                        {/* redirect from /products/ to /merch for cases where user tries
                        to link there directly */}
                        <Redirect 
                            from='/products'
                            to='/merch'
                        />

                        <Route path='/goodies' component={Goodies} />

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
                            />} 
                        />

                        <Route path='/place-order' 
                            render={(props) => <PlaceOrderPage
                                {...props} 
                                itemsInCart={this.state.itemsInCart}
                                totalPrice={this.state.totalPrice}
                                setFullAddress={this.setFullAddress}
                                setOrderInfo={this.setOrderInfo}
                            />} 
                        />

                        <Route path='/order-summary' 
                            render={(props) => <OrderSummary
                                {...props} 
                                itemsInCart={this.state.itemsInCart}
                                totalPrice={this.state.totalPrice}
                                fullAddress={this.state.orderInfo.fullAddress}
                                orderInfo={this.state.orderInfo}
                            />} 
                        />

                    </Switch>

                </ScrollToTop>
                
            </Router>
        )

    }

}

export default Main