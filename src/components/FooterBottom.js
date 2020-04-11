import React, { Component } from 'react'
import { Typography } from '@material-ui/core'

export default class FooterBottom extends Component {
    render() {
        return (
            <div style={styles.main}>
                <Typography variant="caption"> 
                    &copy; 2020, northwest, 4431 records
                </Typography>
                <br />
                <Typography variant="caption"
                    onClick={this.copyToClipboard}
                > 
                    1NJQyoov5RSJq9YPbzNktN6oVguf2Anav4
                </Typography>
            </div>
        )
    }
}

const styles = {
    main: {
        width: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20px',
        textAlign: 'center',
    },

    popupContent: {
        backgroundColor: 'rgba(0,0,0,1)',
        padding: '3px 8px',
        margin: '0 auto',
    }
}