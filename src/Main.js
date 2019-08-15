import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Home from './Home'


class Main extends Component {

    state = {
        headerLink: 'http://www.instagram.com/northwest219'
    }

    render(){

        return(
            <div className="mainWrapper">

                <Header 
                    headerLink={this.state.headerLink}
                />

                <Home />

            </div>
        )

    }

}

export default Main