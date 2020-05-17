import React, { Component } from 'react'
import Title from './Title'
import Selectors from './Selectors'
import NativeSelectors from './Selectors.Native'

export default class ProductOptions extends Component {
  render() {
    const { 
      item, 
      model, 
      match,
      device
    } = this.props
    return (
      <div style={styles.main}>
        {item && <Title item={item} device={device} />}

        {device.isMobile
          ? item && <NativeSelectors 
            item={item}
            model={model}
            setColor={this.props.setColor}
            setSize={this.props.setSize}
            setURL={this.props.setURL}
          />
          : item && <Selectors 
            item={item}
            model={model}
            setColor={this.props.setColor}
            setSize={this.props.setSize}
            setURL={this.props.setURL}
          />
        }
      </div>
    )
  }
}

const styles = {
  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}