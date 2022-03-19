import React, { Component } from 'react'
import { connect } from 'react-redux' 
import { SET_HEADER_LINK } from '../../redux/actionTypes'
import Helmet from './Helmet'
import Entry from './Entry'
import Footer from '../../components/footer/Footer'
import server from '../../server.config'

class Demos extends Component {
  state = {
    goodies: {}
  }

  componentDidMount () {
    this.props.setHeaderLink('/goodies')

    const hasShownPanel = sessionStorage.getItem("hasShownPanel")
    // uses boolean as string
    if(hasShownPanel === "false") {
      this.props.setDestination({from: this.props.match.path})
      this.props.history.push('/blm')
    }

    this.getGoodiesList()
  }

  getGoodiesList = async () => {
    const goodies = await fetch(`${server}/goodies`,
    {
      method: 'GET'
    }).then(res => res.json())
    this.setState({ goodies })
  }

  listEntries = () => {
    const { goodies } = this.state
    return Object.keys(goodies).map(i => {
      const entry = goodies[i]
      return (
        <div key={i}
          style={styles.entry}
        >
          <Entry 
            name={entry.name}
            img={require(`../../assets/img/music/goodies/${entry.art}`)}
            content={entry.description}
            handleDownload={this.handleDownload}
            downloadUrl={entry.downloadUrl}
          />
        </div>
    )}) 
  }

  render() {
    return (
      <div style={styles.main}
        className="view padding-for-header"
      >
        <Helmet />
        <div style={styles.list}>
          {this.listEntries()}
        </div>
        <Footer />
      </div>
    )
  }
}

const styles = {
  main: {
    backgroundColor: '#000',
    letterSpacing: '1px',
  },
  entry: {
    width: '100%',
    paddingBottom: '40px'
  },
  list: {
    display: 'flex',
    flexDirection: 'column'
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
  null,
  mapDispatchToProps
)(Demos)