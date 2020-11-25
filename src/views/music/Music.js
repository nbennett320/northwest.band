import React from 'react'
import { connect } from 'react-redux'
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import Album from './Album'
import Footer from '../../components/footer/Footer'
import { MusicHelmet as Helmet } from './Helmet'
import server from '../../server.config'
import '../../css/music.css'

const useFetchAlbums = () => {
  const [albums, setAlbums] = React.useState({})
  const [isLoading, setLoading] = React.useState(false)
  React.useEffect(() => {
    const getAlbums = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${server}/albums`, { method: 'GET' })
          .then(res => res.json())
        setAlbums(res)
      } catch(err) {
        console.error("error fetching albums", err)
        setLoading(false)
      }
    }
    if(Object.keys(albums).length === 0) {
      getAlbums()
    } else {
      setLoading(false)
    }
  }, [albums])
  return [albums, isLoading]
}

const Music = props => {
  const [albums, isLoading] = useFetchAlbums(props)
  const { device, location } = props
  const hasShownBlmPanel = sessionStorage.getItem("hasShownBlmPanel")
  if(hasShownBlmPanel === "false") {
    props.setDestination({from: props.match.path})
    props.history.push('/blm')
  }
  props.setHeaderLink()
  
  return isLoading 
    ? (
      <div style={styles.hidden}>
        ( loading )
      </div>
    ) : (
    <div style={styles.main}
      className="view padding-for-header" 
    >
      <Helmet />
      <div style={styles.list}>
        {
          Object.keys(albums).map(i => {
            const album = albums[i]
            return (
              <div key={i} 
                style={styles.entry}
              >
                <Album 
                  title={`${album["title"]}`}
                  date={`${album["date"]}`}
                  img={require(`../../assets/img/music/${album["art"]}`)}
                  device={props.device}
                />
              </div>
          )})
        }
      </div>
      <Footer 
        location={location} 
        device={device}
      />
    </div>
  ) 
}

const styles = {
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
}

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