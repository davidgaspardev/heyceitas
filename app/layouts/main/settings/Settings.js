/**
 *
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import React from 'react';
import Account from '../../../config/Account';
import { StyleSheet, AsyncStorage, Image, View, Text } from 'react-native';

import { Log } from '../../../config/Log';

export default class Settings extends React.Component {

  /**
   * @constructor Settings
   * Declaring and initializing properties.
   *
   * @param {object} props
   */
  constructor(props) {
    super(props);

    const { SETTINGS_LAYOUT, CONSTRUCTOR } = Log;

    this.state = {
      account: new Account(),
      user: null
    }

    // To see state of component
    Log.warn(SETTINGS_LAYOUT, CONSTRUCTOR, `state: ${JSON.stringify(this.state)}`);

    this.getProfile();

  }

  getProfile() {
    const { account } = this.state;

    // Getting stored account
    account.getAccount(result => {
      if(typeof(result) == 'object') this.setState({ user: result });
    });

  }

  render() {
    const { user } = this.state;
    const { SETTINGS_LAYOUT, RENDER } = Log;

    Log.warn(SETTINGS_LAYOUT, RENDER, `Started`);

    if(user == null) {
      return (
        <View>

        </View>
      )
    }

    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <Image source={{ uri: user.photo }} style={{width: 150, height: 150, borderRadius: 75}}/>
        </View>
        <Text>{user.name}</Text>
        <Text>{user.givenName}</Text>
        <Text>{user.familyName}</Text>
        <Text>{user.email}</Text>
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
