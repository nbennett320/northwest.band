import React, { Component } from 'react'

class StoreHeader extends Component {

    state = {
        headerImage: null
    }

    componentWillMount() {
        let img = this.randomImg()
        this.setState({
            headerImage: img
        })
    }

    randomNum = max => Math.floor(Math.random() * Math.floor(max))

    randomImg = () => require(`../../img/store/store_header_imgs/${this.randomNum(7)}.jpg`)

    render () {

        const styles = {

            main: {
                width: '100%',
                height: 'calc(250px + 5vh)',
            },
        
            headerImage: {
                height: 'calc(250px + 5vh)',
                width: 'auto',
                backgroundImage: `url("${this.state.headerImage}")`,
                // backgroundAttachment: 'fixed',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            },

            text: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                margin: 'auto',
                color: '#fff',
                fontFamily: '"Work Sans",sans-serif',
                fontWeight: '800',
                fontSize: '1.5em',
                userSelect: 'none',
            }
        
        }

        return (

            <div style={styles.main} className="scroll-box-container">

                <div
                    className="scroll-box" 
                    style={styles.headerImage}
                >
                    <div style={styles.text}>
                        {this.props.textInPhoto}
                    </div>
                </div>

            </div>

        )

    }

}



export default StoreHeader