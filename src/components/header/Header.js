import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CartButton from './CartButton'
import HeaderLogo from '../../img/nwStarLogoBlack_407x128.png'
import BlmBar from './BlmBar'
import '../../css/components/header.css'

class Header extends Component {
  render () {
    const { 
      cart,
			showCart, 
			headerLink
		} = this.props

    return (
      <div className="header" style={styles.main}>
        <Link to={headerLink}
					style={styles.link}
				>
          <img src={HeaderLogo} 
            id="header-image" 
            style={styles.img} 
            alt="northwest header"
          />
        </Link>

				{showCart && <Link to='/cart' > 
						<CartButton cart={cart} /> 
					</Link>
				}
      </div>
    )
  }
}

const styles = {
  main: {
    width: '100%',
    height: '5vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    margin: '0',
    padding: '20px 0 20px 0',
    position: 'fixed',
    top: '0',
    zIndex: '5000',
    boxShadow: '0px 0px 8px 2px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(10px)'
	},

	link: {
		width: 'auto',
		maxWidth: '633px',
		display: 'flex',
    justifyContent: 'center',
	},
	
  img: {
		height: '100%',
    width: 'auto',
    maxWidth: '633px',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '5001'
  }
}

export default Header