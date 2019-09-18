import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './Home'
import Music from './Music'
import Lyrics from './Lyrics'
import Store from './Store'
import Goodies from './Goodies'
import ScrollToTop from './ScrollToTop'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            headerLink: 'http://www.instagram.com/northwest219',
            showCart: false
        }

    }

    setShowCart = bool => {
        this.setState({
            showCart: bool,
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

                        <Route path='/merch' render={(props) => <Store {...props} setShowCart={this.setShowCart} />} />

                        <Route path='/goodies' component={Goodies} />

                    </Switch>
                </ScrollToTop>
            </Router>
        )

    }

}

export default Main