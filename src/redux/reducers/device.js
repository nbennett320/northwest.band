import { MEASURE_DEVICE } from '../actionTypes'

// query device size
const mql = window.matchMedia(`(max-width: 633px)`)
const vpWidth = window.innerWidth
const vpHeight = window.innerHeight
const device = {
  vpWidth,
  vpHeight,
  isMobile: mql.matches
}

const initialState = {
  ...device
}

export default (state = initialState, action) => {
  switch(action.type) {
    case MEASURE_DEVICE: 
      const newDevice = {
        vpWidth,
        vpHeight,
        isMobile: mql.matches
      }
      return newDevice
    default: 
      return state
  }
}