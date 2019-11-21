import React, { Component } from 'react'

class StoreHeader extends Component {

    randomNum = max => Math.floor(Math.random() * Math.floor(max))

    randomImg = () => require(`../../img/store/store_header_imgs/${this.randomNum(3)}.jpg`)

    render () {

        const styles = {

            main: {
                width: '100%',
                height: 'calc(250px + 5vh)',
            },
        
            headerImage: {
                height: 'calc(250px + 5vh)',
                width: 'auto',
                backgroundImage: `url("${this.randomImg()}")`,
                // backgroundAttachment: 'fixed',
                backgroundPosition: 'top',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }
        
        }

        return (

            <div style={styles.main}>

                <div
                    className="scroll-box" 
                    style={styles.headerImage}
                />

            </div>

        )

    }

}



export default StoreHeader