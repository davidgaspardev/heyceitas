import React from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'

export default class ReturnButton extends React.Component {

  render() {

    return(
      <TouchableOpacity onPress={ this.props.event } style={ [ styles.back, styles.centerChild ] }>

        <Image source={require('../../../../images/icons/back.png')} style={{ width: 20, height: 20 }} />

      </TouchableOpacity>
    )
  }

}

const styles = StyleSheet.create({
  back: {
    position: 'absolute',
    left: 10,
    bottom: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ff3333',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100
  },
})
