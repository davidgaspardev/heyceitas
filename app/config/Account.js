import React from 'react'
import { AsyncStorage } from 'react-native'

export default class User {

  constructor() {

    this.props = {
      ACCOUNT_KEY: '@ccount'
    }

  }

  async hasAccount() {

    try {

      let account = await AsyncStorage.getItem(this.props.ACCOUNT_KEY)

      if(account == null) {
        return false
      }

      return true

    }catch(err) {

    }
  }

  async setAccount(user, callback) {
    try {

      await AsyncStorage(this.props.ACCOUNT_KEY, user)

      callback

    }catch(err) {

    }
  }

  async getAccount() {

    try {

      let account = AsyncStorage.getItem(this.props.ACCOUNT_KEY)

      return account

    }catch(err) {

    }

  }

}
