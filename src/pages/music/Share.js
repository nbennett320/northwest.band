import React, { Component } from 'react'
import FooterItem from '../../components/FooterItem'
import ShareIcon from '@material-ui/icons/Share'

export default class Share extends Component {
    render() {
        return (
            <FooterItem 
                Icon={<ShareIcon color='secondary' /> }
                label='share this song'
                link='https://twitter.com/northwest219'
            />
        )
    }
}