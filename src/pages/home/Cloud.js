import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Cloud extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isHovering: false,
        }
    }

    toggleHover = () => this.setState({isHovering: !this.state.isHovering})

    render() {
        const { link, stylesProp, images, isMobile } = this.props
        return (
            <div className="cloud"
                style={{
                    ...stylesProp.cloud,
                    ...isMobile ? {} : {...styles.desktop.cloud},
                    backgroundImage: `url(${require('../../' + images.cloud)})`
                }}
            >
                <Link to={`${link}`}>
                    <div
                        onMouseEnter={this.toggleHover}
                        onMouseLeave={this.toggleHover}
                        style={this.state.isHovering 
                                ? {
                                    ...stylesProp.text.hover,
                                    ...styles.text,
                                    backgroundImage: `url(${require('../../' + images.text.hover)})`
                                } : {
                                    ...stylesProp.text.main,
                                    ...styles.text,
                                    backgroundImage: `url(${require('../../' + images.text.main)})`
                                }
                        }
                    />
                </Link>
            </div>
        )
    }
}

const styles = {
    desktop: {
        cloud: {
            margin: '20px auto',
        },
    },

    text: {
        position: 'relative',
        zIndex: '15',
    }
}

export default Cloud