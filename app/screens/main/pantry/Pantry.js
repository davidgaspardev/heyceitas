/**
 * Pantry Component, responsible for storing the ingredients in the database,
 * being visible to the user as a list formatted with three columns.
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 * @file Pantry.js
 */

import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native'

import DataBase from '../../../config/DataBase'
import ButtonAdd from '../components/FloatingButton'
import { Header, Ingredient, IngredientAdd } from './Components'
import { LOG_SCREEN, PANTRY_SCREEN, CONSTRUCTOR, RENDER } from '../../../config/Log'


export default class Pantry extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      db: new DataBase(),
      ingredients: null,
      modalVisible: false,
      newIngredient: {
        name: '',
        number: 0,
        unity: ''
      }
    }

  }

  set _name(name) {
    this.setState((previousState) => {
      previousState.newIngredient.name = name
      return { newIngredient: previousState.newIngredient }
    })
  }

  set _number(number) {
    this.setState((previousState) => {
      previousState.newIngredient.number = number
      return { newIngredient: previousState.newIngredient }
    })
  }

  set _unity(unity) {
    this.setState((previousState) => {
      previousState.newIngredient.unity = unity
      return { newIngredient: previousState.newIngredient }
    })
  }

  render() {

    LOG_SCREEN(PANTRY_SCREEN, RENDER, 'Started/Update')

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
      }}>

        <IngredientAdd
          visible={this.state.modalVisible}
          onpress={ this._addIngredient.bind(this) }

          //TextInput (onChangeText)
          onChangeName={(text) => this._name = text}
          onChangeNumber={(text) => this._number = text}
          onChangeUnity={(text) => this._unity = text}
        />

        <Header />

        <FlatList
          data={this.state.ingredients}
          numColumns={3}
          renderItem={({item}) => this._insertIngredient(item) }
          keyExtractor={(item) => item}
        />

        <ButtonAdd
          icon={require('../../../images/icons/add.png')}
          event={() => this._setModalVisible(true)}
        />

      </View>
    );
  }

  componentDidMount() {

    this.state.db.getDatas(datas => this.setState({
      ingredients: datas
   }))

  }


  _insertIngredient(item) {
    return <Ingredient name={item.name} quantity={item.number}/>
  }

  _addIngredient() {

    this._setModalVisible(false)

    if(this.state.newIngredient != null){

      this.state.db.setData(this.state.newIngredient, ingredients => {
        this.setState({
          ingredients: ingredients,
          newIngredient: null
        })
      })
    }
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

}
