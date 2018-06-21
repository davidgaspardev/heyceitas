import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'

export default class FloatingButton extends React.Component {

  render() {

    return(
      <TouchableOpacity onPress={ this.props.event } style={ [ styles.back, styles.centerChild ] }>

        <Image source={this.props.icon} style={{ width: 20, height: 20 }} />

      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ff3333',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
  },
})
