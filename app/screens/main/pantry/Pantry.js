/**
 * Pantry Component, responsible for storing the ingredients in the database,
 * being visible to the user as a list formatted with three columns.
 *
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 * @file Pantry.js
 */

// React/React-Native is an open source JavaScript library for creating user interfaces
import React from 'react';
import { StyleSheet, TouchableOpacity, FlatList, Image,View } from 'react-native';

import DataBase from '../../../config/DataBase';
import { Header, FloatingButton } from '../Components';
import { Ingredient, IngredientAddOrDetail } from './Components';
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
      detail: { _id: null, name: null, number: null, unity: null },
      getRecipes: false,
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

    const { db } = this.state;

    db.hasData(null, (has) => {

      if(has != this.state.getRecipes) {
        this.setState({
          getRecipes: has
        });
      }
    });

    LOG_SCREEN(PANTRY_SCREEN, RENDER, 'Started/Update');

    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
      }}>

        <Header title='Armário'/>

        <IngredientAddOrDetail
          isDetail={this.state.isDetail}
          name={this.state.detail.name}
          number={this.state.detail.number}
          unity={this.state.detail.unity}

          visible={ this.state.modalVisible }
          onpress={ this._addIngredient.bind(this) }
          eventBack={ () => this.setState({ modalVisible: false }) }
          eventDelete={ () => {
            this.state.db.setRemove(this.state.detail, () => {
              db.getDatas(datas => this.setState({
                ingredients: datas,
                modalVisible: false
             }));
            })
          }}

          //TextInput (onChangeText)
          onChangeName={ (text) => this._name = text }
          onChangeNumber={ (text) => this._number = text }
          onChangeUnity={ (text) => this._unity = text }
        />

        <FlatList
          data={this.state.ingredients}
          numColumns={3}
          renderItem={({item}) => this._insertIngredient(item) }
          keyExtractor={(item, index) => item._id}
        />

        <FloatingButton
          icon={require('../../../images/icons/add.png')}
          event={() => this._setModalVisible(true)}
        />

        {
          this._getRecipes(this.state.getRecipes)
        }

      </View>
    );
  }

  componentDidMount() {
    // JSON destructuring
    const { db } = this.state;

    LOG_SCREEN(PANTRY_SCREEN, POS_RENDER, 'Started/Update')

    //this.state.db.setRemove();

    db.getDatas(datas => this.setState({
      ingredients: datas
    }));

  }


  _insertIngredient(item) {
    return <Ingredient name={item.name} number={item.number} unity={item.unity} onpress={() => {
      this._setModalVisible(true, true, item);
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

  _getRecipes(has) {
    const { ingredients } = this.state;

    if(has) {

      let recipe;
      let tt;
      try {
        tt = ingredients[0].name;
      }catch(err) {
        tt = 'Mistura de bolo';
      }
      switch(tt) {
        
          case 'Mistura para bolo':
            recipe = 0;
            break;

          case 'Kiwi':
            recipe = 1;
            break;

          case 'Pão':
            recipe = 2;
            break;

          default:
            recipe = 0;
        }

      return (
        <TouchableOpacity onPress={ () => this.props.navigation.navigate('RecipeDetail', { recipe: this.state.recipes[recipe] })} style={{
          position: 'absolute',
          left: 15,
          bottom: 15,
          borderRadius: 28,
          width: 56,
          height: 56,
          backgroundColor: '#ff3333',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <Image source={require('../../../images/icons/get-recipes.png')} style={{ width: 32, height: 32 }} />

        </TouchableOpacity>
      );
    }

  }

}
