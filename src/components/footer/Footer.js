import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { 
  createMuiTheme, 
  ThemeProvider 
} from '@material-ui/core/styles'
import FooterItem from './FooterItem'
import FooterBottom from './FooterBottom'
import Share from './Share'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import SpotifyIcon from '../icons/SpotifyIcon'
import AppleMusicIcon from '../icons/AppleMusicIcon'
import YouTubeIcon from '@material-ui/icons/YouTube'
// import AlternateEmailIcon from '@material-ui/icons/AlternateEmail'
// import MenuBookIcon from '@material-ui/icons/MenuBook'
// import GitHubIcon from '@material-ui/icons/GitHub'
import CodeIcon from '@material-ui/icons/Code'
import GetGithubUrl from '../../scripts/GetGithubUrl'
import '../../css/components/footer.css'

class Footer extends Component {
  render() {
    const { device, location } = this.props
    const { pathname } = location
    const theme = createMuiTheme({
      palette: {
        primary: {
          main: '#000',
        },
        secondary: {
          main: '#fff',
        },
      },
    })

    return (
      <div style={styles.footer}>
        <ThemeProvider theme={theme}>
          <Typography variant='h6' style={styles.header}> hit us up!! </Typography>

          <FooterItem 
            Icon={<InstagramIcon color='secondary' />}
            label='instagram'
            link='https://www.instagram.com/northwest219/'
          />

          <FooterItem 
            Icon={<TwitterIcon color='secondary' /> }
            label='twitter'
            link='https://twitter.com/northwest219'
          />

          <FooterItem 
            Icon={<SpotifyIcon color='secondary' />}
            label='spotify'
            link='https://open.spotify.com/artist/0hscERxMRDZRqZIHjKbExD?si=FGhntveJTxKsk9KsoGFM0A'
          />

          <FooterItem 
            Icon={<AppleMusicIcon color='secondary' />}
            label='apple music'
            link='https://music.apple.com/us/artist/northwest/1409175767'
          />

          <FooterItem 
            Icon={<YouTubeIcon color='secondary' />}
            label='youtube'
            link='https://www.youtube.com/channel/UCsAuRJv-BwMcLELAjNH46dQ'
          />

          {/* <FooterItem 
            Icon={<AlternateEmailIcon color='secondary' />}
            label='contact'
            link={
              <Typography 
                variant='subtitle2'
                color='inherit'
                style={styles.linkItem}
              >
                <Link to='/contact' 
                  className='underline-on-hover' 
                  style={{color: 'rgba(255,255,255,0.82)'}}
                >
                  contact 
                </Link>
              </Typography>
            }
          /> */}
          
          {/* <FooterItem 
            Icon={<MenuBookIcon color='secondary' />}
            label='about'
            link={
              <Typography
                variant='subtitle2'
                color='inherit'
                style={styles.linkItem}
              >
                <Link to='/about' 
                  className='underline-on-hover' 
                  style={{color: 'rgba(255,255,255,0.82)'}}
                > 
                  about 
                </Link>
              </Typography>
            }
          /> */}

          {/* <FooterItem 
            Icon={<GitHubIcon color='secondary' />}
            label='github'
            link='https://github.com/nbennett320/northwest.band'
          /> */}

          <FooterItem 
            Icon={<CodeIcon color='secondary' />}
            label='see the code'
            link={`https://github.com/nbennett320/northwest.band/${GetGithubUrl(pathname)}`}
          />

          {device.isMobile && <Share location={location} />}

          <FooterBottom />
        </ThemeProvider>               
      </div>
    )
  }
}

const styles = {
  footer: {
    width: '100%',
    height: 'auto',
    position: 'absolute',
    padding: '40px 0',
    backgroundColor: '#000', 
    color: '#fff',
    top: '100%',
  },

  linkItem: {
    display: 'flex',
    flexDirection: 'row',
  },

  header: {
    width: 'auto',
    marginLeft: '10%',
    marginRight: 'auto',
  }
}

export default Footer