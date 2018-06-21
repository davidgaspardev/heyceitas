/**
* @author davidgaspar.dev@gmail.com (David Gaspar)
*/

import React from 'react'
import Account from './Account'
import { AsyncStorage } from 'react-native'
import { LOG_TAG, OBJ_COMUNIC } from './Log'

export default class Communication {

  constructor() {

    this.props = {
      address: 'http://18.222.51.173:8080',
      path: {
        recipes: '/recipes',
        login: '/login'
      },
      query: {
        category: '?category='
      },
      method: ['GET', 'POST']
    }

  }

  _HTTPprotocol(methodNum, options, body) {

    if(typeof(numMethod) == 'number') {

      let protocol = {
        method: this.props.method[numMethod],
        headers: {
          'User-Agent': 'HEYceitas 1.0v'
        }
      }

      if(typeof(options) == 'object') {
        protocol.headers.concat(options)
      }

      if(typeof(body) == 'string'){
        protocol.concat({ body: body })
      }

      return protocol

    }

  }

  async login(account, callback) {

    try {

      const url = `${this.props.address}${this.props.path.login}`
      LOG_TAG(OBJ_COMUNIC, `(fetch) url: ${url}`)

      const protocol = {
        method: this.props.method[1], //method POST
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: account
      }
      LOG_TAG(OBJ_COMUNIC, `(fetch) HTTP protocol: ${JSON.stringify(protocol)}`)

      let response = await fetch(url, protocol)

      if(response.ok) {

        let success = await response.json()
        callback(success)

      }else {

        LOG_TAG(OBJ_COMUNIC, `(fetch) failed: ${response.status} (Status-Code)`)

      }

    }catch(err) {

    }

  }


  async getRecipes(category, callback) {

    LOG_TAG(OBJ_COMUNIC, `category: ${category}`)

    try {

      const url = `${this.props.address}${this.props.path.recipes}${this.props.query.category}${category}`
      LOG_TAG(OBJ_COMUNIC, `(fetch) url: ${url}`)

      const protocol = {
        method: this.props.method[0], // method GET
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'HEYceitas 1.0v'
          //'Authorization': JSON.parse(account).idToken
        }
      }
      LOG_TAG(OBJ_COMUNIC, `(fetch) HTTP protocol: ${JSON.stringify(protocol)}`)

      let response     = await fetch(url, protocol)
      let responseJSON = await response.json()

      callback(responseJSON)

    }catch(err) {

    }
  }

}
