import React from 'react'
import { connect } from 'react-redux' 
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import Helmet from './Helmet'
import StoreHeader from './StoreHeader'
import Products from './Products'

const Merch = props => {
  const { device } = props
  props.setHeaderLink()

  return (
    <div className="view">
      <Helmet />
      <StoreHeader 
        scale={() => (
          device.vpWidth > 1920 
            ? "lg"
            : device.isMobile 
              ? "sm"
              : "m"
        )}
      />
      <Products />
    </div>
  )
}

const mapStateToProps = state => {
  return {
    device: state.device
  }
}

const mapDispatchToProps = dispatch => ({
  setHeaderLink: () => dispatch({
    type: SET_HEADER_LINK,
    payload: {
      headerLink: '/'
    }
  })
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Merch)