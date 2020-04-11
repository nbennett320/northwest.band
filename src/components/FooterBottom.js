import React, { Component } from 'react'
import { 
    Typography,
    Popover
} from '@material-ui/core'

class FooterBottom extends Component {
    state = {
        isOpen: false,
        anchor: undefined,
    }

    copyToClipboard = e => {
        navigator.clipboard.writeText(e.target.innerText)
        this.handleOpen(e.target)
    }

    handleOpen = target => {
        this.setState({
            isOpen: true,
            anchor: target
        })
    }

    handleClose = () => {
        this.setState({
            isOpen: false,
            anchor: undefined
        })
    }

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
                <Popover 
                    open={this.state.isOpen}
                    anchorEl={this.state.anchor}
                    onClose={this.handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                    classes={{
                        root: styles.popup
                    }}
                >
                    <div style={styles.popupContent}>
                        <Typography variant="caption" color="secondary"> 
                            copied '1NJQyoov5RSJq9YPbzNktN6oVguf2Anav4' to clipboard
                        </Typography>
                    </div>
                </Popover>
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

export default FooterBottom