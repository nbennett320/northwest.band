import React, { Component } from 'react'

class LyricsHeader extends Component {

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

    randomImg = () => require(`../img/store/store_header_imgs/${this.randomNum(7)}.jpg`)

    render () {

        const styles = {

            main: {
                width: '100%',
                height: 'calc(250px + 5vh)',
            },
        
            headerImage: {
                height: 'calc(250px + 5vh)',
                width: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                //backgroundImage: `url("${this.state.headerImage}")`,
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            },

            text: {
                width: 'auto',
                height: 'auto',
                paddingTop: '5vh',
                marginTop: 'auto',
                marginBottom: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
                alignText: 'left',
                color: '#fff',
                fontFamily: '"Work Sans",sans-serif',
                fontWeight: '800',
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
                        <h2 className='song-title' style={{fontSize: '3em'}}>{this.props.title}</h2>
                        <h3 className='album-title' style={{fontSize: '2.0em'}}>{this.props.album}</h3>
                        <h3 className='song-date' style={{fontSize: '2.0em'}}>{this.props.date}</h3>
                    </div>
                </div>

            </div>

        )

    }

}



export default LyricsHeader