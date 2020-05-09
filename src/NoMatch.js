import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import StoreHeader from './components/store/StoreHeader'
import Footer from './components/Footer'

import './css/404.css'

class NoMatch extends Component {
	render() {
		return (
			<div style={styles.main}>
				{helmet}
				<StoreHeader textInPhoto={"404... (summ wrong lolz)"} />

				<p style={styles.paragraph}>
					yeah... sorry looks like the link is wrong... whoops
				</p>

				<Link to='/' 
					style={styles.button}
					className="button-back-to-home-404"
				>

					(back to home page)

				</Link>

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

	paragraph: {
		width: '80%',
		marginLeft: '10%',
		marginRight: 'auto',
		marginTop: '40px',
		marginBottom: '40px',
		fontFamily: '"Work Sans",sans-serif',
		fontWeight: '400',
		fontSize: '1.0em',
		textAlign: 'center',
	},

	button: {
		color: '#69727b',
		backgroundColor: '#fff',
		width: 'auto',
		margin: '40px auto',
		padding: '10px 20px',
		borderStyle: 'solid',
		borderWidth: '1px',
		borderColor: 'hsl(0,0%,80%)',
		borderBottomLeftRadius: '4px',
		borderBottomRightRadius: '4px',
		borderTopLeftRadius: '4px',
		borderTopRightRadius: '4px',
		fontFamily: '"Work Sans",sans-serif',
		fontWeight: '400',
		fontSize: 'auto',
	}
}

export default NoMatch