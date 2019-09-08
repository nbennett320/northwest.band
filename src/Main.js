import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from './components/Header'
import Home from './Home'


class Main extends Component {

    state = {
        headerLink: 'http://www.instagram.com/northwest219'
    }
    
    geth2 = () => {
        return (<h2> hello</h2>)

    }

    render(){

        return(
            <Router>


                <Header 
                    headerLink={this.state.headerLink}
                />

                <Route exact path="/" component={Home} />

                <Route path="/music" component={this.geth2} />


            </Router>
        )

    }

}

export default Main