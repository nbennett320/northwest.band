import React from 'react'
import { connect } from 'react-redux'
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import { makeStyles } from '@material-ui/core/styles'
import Album from './Album'
import { MusicHelmet as Helmet } from './Helmet'
import albums from '../../assets/data/Albums.json'
import '../../css/music.css'

const Music = props => {
  const classes = useStyles()
  props.setHeaderLink()
  
  return (
    <div className={`${classes.main} view padding-for-header`}>
      <Helmet />
      <div className={classes.list}>
        {
          Object.keys(albums).map(i => {
            const album = albums[i]
            return (
              <div 
                key={i} 
                className={classes.entry}
              >
                <Album 
                  title={`${album["title"]}`}
                  date={`${album["date"]}`}
                  img={`../../assets/img/music/${album["art"]}`}
                />
              </div>
          )})
        }
      </div>
    </div>
  ) 
}

const useStyles = makeStyles(() => ({
  main: {
    paddingBottom: '2vh',
    margin: '0',
    backgroundColor: '#000',
    letterSpacing: '1px',
  },
  entry: {
    width: '100%',
    paddingBottom: '40px'
  },
  list: {
    display: 'flex',
    flexDirection: 'column-reverse'
  },
  hidden: {
    display: 'none'
  }
}))

const mapStateToProps = state => ({
  device: state.device
})

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
)(Music)