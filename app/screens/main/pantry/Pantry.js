/**
 * Pantry Component, responsible for storing the ingredients in the database,
 * being visible to the user as a list formatted with three columns.
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 * @file Pantry.js
 */

// React/React-Native is an open source JavaScript library for creating user interfaces
import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import DataBase from '../../../config/DataBase';
import ButtonAdd from '../components/FloatingButton';
import { Header, Ingredient, IngredientAddOrDetail } from './Components';
import { LOG_SCREEN, PANTRY_SCREEN, CONSTRUCTOR, RENDER, POS_RENDER } from '../../../config/Log';

/** PANTRY SCREEN */
export default class Pantry extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      db: new DataBase('Pantry'),
      ingredients: null,
      newIngredient: { name: null, number: null, unity: null },
      modalVisible: false,
      isDetail: false,
      detail: { name: null, number: null, unity: null }
    };

  }

  set _name(name) {
    this.setState((previousState) => {
      previousState.newIngredient.name = name;
      return { newIngredient: previousState.newIngredient };
    });
  }

  set _number(number) {
    this.setState((previousState) => {
      previousState.newIngredient.number = number;
      return { newIngredient: previousState.newIngredient };
    });
  }

  set _unity(unity) {
    this.setState((previousState) => {
      previousState.newIngredient.unity = unity;
      return { newIngredient: previousState.newIngredient };
    })
  }

  render() {

    LOG_SCREEN(PANTRY_SCREEN, RENDER, 'Started/Update');

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
      }}>

        <IngredientAddOrDetail
          isDetail={this.state.isDetail}
          name={this.state.name}
          number={this.state.number}
          unity={this.state.unity}

          visible={ this.state.modalVisible }
          onpress={ this._addIngredient.bind(this) }
          eventBack={ () => this.setState({ modalVisible: false }) }

          //TextInput (onChangeText)
          onChangeName={ (text) => this._name = text }
          onChangeNumber={ (text) => this._number = text }
          onChangeUnity={ (text) => this._unity = text }
        />

        <Header />

        <FlatList
          data={this.state.ingredients}
          numColumns={3}
          renderItem={({item}) => this._insertIngredient(item) }
          keyExtractor={(item, index) => item._id}
        />

        <ButtonAdd
          icon={require('../../../images/icons/add.png')}
          event={() => this._setModalVisible(true)}
        />

      </View>
    );
  }

  componentDidMount() {
    const { db } = this.state;

    LOG_SCREEN(PANTRY_SCREEN, POS_RENDER, 'Started/Update')

    //this.state.db.setRemove();

    db.getDatas(datas => this.setState({
      ingredients: datas
   }));

  }


  _insertIngredient(item) {
    return <Ingredient name={item.name} number={item.number} unity={item.unity} onpress={() => {
      this.setState(({detail}) => {

      });
    }}/>
  }

  _detailIngredient() {
    this.modalVisible(false, )
  }

  _addIngredient() {
    const { db, newIngredient } = this.state;

    this._setModalVisible(false);

    if(newIngredient != null){

      db.setData(newIngredient, ingredients => {
        this.setState({
          ingredients: ingredients,
          newIngredient: { name: null, number: null, unity: null }
        });
      });
    }
  }

  _setModalVisible(visible, detail, item) {

    this.setState(previousState => {
      let newState = {
        modalVisible: visible
      }

      if(typeof(detail) == 'undefined') newState.isDetail = false;
      else {
        newState.isDetail = detail;
        if(detail) newState.detail = item;
      }

      return newState;
    });
  }

}
