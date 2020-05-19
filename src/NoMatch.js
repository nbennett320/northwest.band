import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { Typography, Button } from '@material-ui/core'
import ImageBlock from './components/ImageBlock'
import Footer from './components/Footer'

export default class NoMatch extends Component {
  componentDidMount() {
    this.props.setHeaderLink('/')
  }

  handleClick = () => {
    this.props.history.push('/')
  }

	render() {
    const { device } = this.props
		return (
			<div style={styles.main}>
				{helmet}
				<ImageBlock
          text={"error 404.. sum wrong lol"}
          scale={() => (
            device.vpWidth > 1920 
              ? "lg"
              : device.isMobile 
                ? "sm"
                : "m"
          )}
        />

        <div style={styles.container}>
          <Typography variant="body1"
            style={styles.text}
          >
            i guess the link you tried doesn't exist or is broken
            <br />
            <br />
            <div style={{textAlign: 'center'}}>
              that's awkward <span role="img" aria-label="thumbs up emoji"> &#128077; </span> 
            </div>
          </Typography>
          
          <div style={styles.button}>
            <Button variant="outlined"
              onClick={this.handleClick}
              style={{textTransform: 'lowercase'}}
            >
              back to homepage
            </Button>
          </div>
        </div>
        <Footer />
			</div>
		)
	}
}

const helmet = (
	<Helmet>
		<meta charset="utf-8" />
		<meta name="keywords" 
			content="
				northwest, 
				northwest the band, 
				northwest band,
				north west, 
				band, 
				nwi, 
				219, 
				the region, 
				northwest indiana, 
				chicago, 
				indie
			"
		/>
		<link rel="canonical" href="http://northwest.band" />
		<meta name="author" content="Noah Bennett" />
		<meta name="description" content="
			Northwest shirts, hoodies, physical music and more.
		" />
		<meta name="robots" content="index" />
		<meta name="url" content="http://northwest.band/merch" />
		<title>northwest the band | 404... LOL </title>
	</Helmet>
)

const styles = {
	main: {
		width: '100%',
		height: 'auto',
		minHeight: 'calc(100%)',
		backgroundColor: '#fff',
		display: 'flex',
		top: '0',
		position: 'absolute',
		flexDirection: 'column',
		alignContent: 'flex-start',
  },
  
  container: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  text: {
    paddingTop: '20px',
    margin: '0 auto',
  },

  button: {
    padding: '40px',
    margin: '0 auto',
  }
}