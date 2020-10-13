import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartButton from './CartButton'
import HeaderLogo from '../../assets/img/nwStarLogoBlack_407x128.png'
// import BlmBar from './BlmBar'
import '../../css/components/header.css'

const Header = props => {
  const { 
    cart,
    showCart, 
    headerLink
  } = props
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

const styles = {
  main: {
    width: '100%',
    maxWidth: '100vw',
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
		width: '33%',
		maxWidth: '633px',
		display: 'flex',
    justifyContent: 'center',
	},
	
  img: {
    objectFit: 'contain',
		height: '100%',
    width: '100%',
    maxWidth: '633px',
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: '5001'
  }
}

const mapStateToProps = state => ({
  cart: state.cartItems,
  showCart: state.showCart,
  headerLink: state.headerLink,
})

export default connect(mapStateToProps)(Header)