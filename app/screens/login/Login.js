import React from 'react';
import { TouchableOpacity, Dimesions,  StyleSheet, Image, View } from 'react-native';

export default class Login extends React.Component {

  render() {

    return(
      <View style={styles.container}>
        <Image source={require('../../images/login/background.png')} style={styles.background}/>

        <View style={styles.login}>

          { /* Logo HEYceitas */ }
          <Image source={require('../../images/login/logo.png')} style={styles.loginLogo}/>

          { /* Button to Facebook */ }
          <TouchableOpacity onPress={
            () => this.props.navigation.navigate('Logged')
          }>
            <Image source={require('../../images/login/facebook.png')} style={styles.loginButton} />
          </TouchableOpacity>

          { /* Button to Google */ }
          <TouchableOpacity onPress={
            () => this.props.navigation.navigate('Logged')
          }>
            <Image source={require('../../images/login/google.png')} style={styles.loginButton} />
          </TouchableOpacity>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  login: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba( 0, 0, 0, .3)'
  },
  loginLogo: {
    width: 250,
    height: 193,
    marginBottom: 100
  },
  loginButton: {
    width: 270,
    height: 40,
    margin: 10,
    borderRadius: 5
  }
});
