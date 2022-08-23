import React, { Component } from 'react'
import Title from './Title'
import Selectors from './Selectors'
import NativeSelectors from './Selectors.Native'
import AddToCart from './AddToCart'

export default class Actions extends Component {
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

        {item && <AddToCart 
          item={item}
          match={match}
          device={device}
          addItemToCart={this.props.addItemToCart}
        />}
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