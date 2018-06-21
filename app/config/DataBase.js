/**
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import Mongo from 'react-native-local-mongodb'
import { LOG_TAG, OBJ_DB } from './Log'

export default class DataBase {

  /** @constructs DataBase: Start object with favorite as filename to the data base */
  constructor() {

    this.props = {
      db: new Mongo({filename: 'favorite'})
    }

    this.props.db.loadDatabase((err) => {
      if(err) {
        LOG_TAG(OBJ_DB, `(loadDatabase) error: ${err}`)
        throw err
      }
    })

  }

  getDatas(callback) {

    this.props.db.find({}, (err, docs) => {
      LOG_TAG(OBJ_DB, `datas: ${JSON.stringify(docs)}`)

      if(typeof(callback) == 'function') {

        callback(docs)

      }

    })

  }

  setData(doc, callback) {

    this.props.db.insert(doc, (err) => {

      if(err) {
        LOG_TAG(OBJ_DB, `(insert) error: ${err}`)
        throw err
      }

      if(typeof(callback) == 'function'){

        this.getDatas(callback)

      }

    })

  }

  setRemoveAll() {
    this.props.db.remove({}, { multi: true }, (err) => {
      if(err) LOG_TAG(OBJ_DB, `(remove) error:`)
    })
  }

}
