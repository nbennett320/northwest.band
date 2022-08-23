import React, { Component } from 'react'
import { 
  IconButton, 
  Link,
} from '@material-ui/core'

export default class FooterItem extends Component {
  linkIsInternal = link => typeof(link) === 'string'
  render() {
    const { Icon, label, link } = this.props
    return(
      <li style={styles.li}>
        <IconButton>
          {Icon}
        </IconButton>

        {this.linkIsInternal(link) 
          ? <Link href={link} 
            variant='subtitle2'
            color='inherit'
            rel="noopener"
          >
            {label}
          </Link>
          : (link)
        }
      </li>
    )
  }
}

const styles = {
  li: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    listStyleType: 'none',
    color: 'rgba(255,255,255,0.82)',
    marginLeft: '10%',
    marginRight: 'auto',
  }
}