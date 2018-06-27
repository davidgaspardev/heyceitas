/**
 *
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import React from 'react';
import Account from '../../../config/Account';
import { StyleSheet, AsyncStorage, Image, View, Text } from 'react-native';

const LOG_TAG = '[ SETTINGS | Component ] '

export default class Settings extends React.Component {

  constructor(props) {
    super(props)

    console.log(LOG_TAG + 'constructor()')

    this.state = {
      account: new Account(),
      user: []
    }

    this.getProfile();

  }

  async getProfile() {
    try {

      await AsyncStorage.getItem('@ccount', (err, result) => {

        console.log(LOG_TAG + ' profile: ' + result)

        let user = JSON.parse(result)

        this.setState({
          user: user
        })
      })
    }catch(err) {
      console.log(err)
    }
  }

  render() {

    console.log(LOG_TAG + 'render()')

    if(this.state.user == null) {
      return (
        <View>

        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={{ uri: this.state.user.photo }} style={{width: 150, height: 150, borderRadius: 75}}/>
        </View>
        <Text>{this.state.user.name}</Text>
        <Text>{this.state.user.givenName}</Text>
        <Text>{this.state.user.familyName}</Text>
        <Text>{this.state.user.email}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white'
  },
  profile: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    height: 170
  }
});
