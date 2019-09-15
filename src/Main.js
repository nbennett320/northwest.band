import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Home from './Home'
import Music from './Music'
import Lyrics from './Lyrics'

class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            headerLink: 'http://www.instagram.com/northwest219'
        }

    }

    render() {

        return (
            <Router>

                <Header
                    headerLink={this.state.headerLink}
                />
                <Switch>

                    <Route exact path='/' component={Home} />

                    <Route path='/music/' render={(props) => <Music {...props} />} />

                    <Route path='/swmtn' render={(props) => <Lyrics {...props} songKey="swmtn" />} />

                </Switch>

            </Router>
        )

    }

}

export default Main