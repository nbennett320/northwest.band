import React, { Component } from 'react'
import StoreHeader from './components/store/StoreHeader'

class NoMatch extends Component {

    render () {

        return (

            <div style={styles.main}>

                <StoreHeader textInPhoto={"404... (summ wrong lolz)"} />

            </div>

        )

    }

}

const styles = {

    main: {
        width: '100%',
    },

}

export default NoMatch