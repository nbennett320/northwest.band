import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './Home'
import Music from './Music'
import Lyrics from './Lyrics'
import Store from './Store'
import Goodies from './Goodies'
import ScrollToTop from './scripts/ScrollToTop'
import CheckOutPage from './CheckOutPage'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            headerLink: 'http://www.instagram.com/northwest219',
            showCart: false,
            numberOfItemsInCart: 0,
            itemsInCart: [],
        }

    }

    setShowCart = bool => {
        this.setState({
            showCart: bool,
        })
    }

    addItemToCart = item => {
        const items = this.state.itemsInCart
        items.push(item)
        this.setState({
            itemsInCart: items,
            numberOfItemsInCart: items.length
        })
        // console.log(this.state.numberOfItemsInCart)
        // console.log(this.state.itemsInCart)
    }

    removeItem = itemNumber => {
        console.log("item num:" + itemNumber)
        let items = this.state.itemsInCart
        
        if(items.length == 1) items.pop()
        else items.splice(itemNumber, 1)

        this.setState({
            itemsInCart: items,
            numberOfItemsInCart: items.length
        })
        // console.log(this.state.numberOfItemsInCart)
        // console.log(this.state.itemsInCart)
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

                        <Route path='/music/' render={(props) => <Music {...props} />} />

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
                            />}
                        />

                        <Route path='/goodies' component={Goodies} />

                        <Route path='/checkout' 
                            render={(props) => <CheckOutPage 
                                {...props} 
                                itemsInCart={this.state.itemsInCart}
                                removeItem={this.removeItem}
                            />} 
                                
                        />

                    </Switch>
                </ScrollToTop>
            </Router>
        )

    }

}

export default Main