import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Home from './Home'
import Music from './Music'


class Main extends Component {

    constructor(props) {
        super(props)

        this.state = {
            headerLink: 'http://www.instagram.com/northwest219'
        }

    }

    handleLinkToHome = () => {
        return (<Home />)
    }
    
    handleLinkToMusic = () => {
        return (<Music />)
    }

    render(){

        return(
            <Router>

                <Header 
                    headerLink={this.state.headerLink}
                />

                <Route exact path="/" component={this.handleLinkToHome} />

                <Route path="/music" component={this.handleLinkToMusic} />


            </Router>
        )

    }

}

export default Main