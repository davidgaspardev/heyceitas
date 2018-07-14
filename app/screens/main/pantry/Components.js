/**
 * Components to be used in the Pantry screen.
 *
 * @author davidgaspar.dev@gmail.com
 * @file Components.js - ECMAScript 2015
 */

import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, TextInput, Modal, View, Text } from 'react-native';

/**
 * Layout to view the data of the ingredient saved in the database (MongoDB local).
 */
class Ingredient extends React.PureComponent {

  render() {
    return (
      <TouchableOpacity style={styles.ingredient} onPress={this.props.onpress}>

        <View style={[ styles.ingredientBox, styles.centerChild ]}>

          <Text style={styles.ingredientText}>{this.props.name}</Text>

        </View>
        <View style={styles.ingredientBoxInfo}>

          <View style={[ styles.ingredientBoxNumber, styles.centerChild ]}>

            <Text style={styles.ingredientText}>{this.props.number}</Text>

          </View>

          <View style={[ styles.ingredientBoxUnity, styles.centerChild ]}>

            <Text style={styles.ingredientText}>{this.props.unity}</Text>

          </View>

        </View>
      </TouchableOpacity>
    )
  }

}

/**
 * Layout to insert data of the ingredient, and to save in database.
 */
class IngredientAddOrDetail extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      ingredient: {
        name: '',
        number: 0,
        unity: ''
      }
    }
  }

  render() {
    return(
      <Modal
        style={styles.centerChild}
        animationType="slide"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={this.props.eventBack}>

          <View style={[{ flex: 1 }, styles.centerChild]}>

            <View style={styles.itemAddOrDetail}>
              {
                this.props.isDetail? this._detail() : this._add()
              }
            </View>

          </View>

      </Modal>
    );
  }

  _add() {
    return(
      <View style={{ flex: 1}}>
        <View style={[styles.itemAddHeader, styles.centerChild]}>
          <Text>Adicionar Ingrediente</Text>
        </View>

        <View style={styles.itemAddContent}>

          <TextInput
            onChangeText={this.props.onChangeName}
            maxLength={25}
            numberOfLine={1}
            placeholder="Nome do ingrediente"
          />

          <TextInput
            onChangeText={this.props.onChangeNumber}
            placeholder="Quantidade"
          />

          <TextInput
            onChangeText={this.props.onChangeUnity}
            placeholder="Unidade"
          />

        </View>

        <TouchableOpacity style={styles.itemAddButton} onPress={this.props.onpress}>
          <Text style={{ color: 'white' }} >Add</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _detail() {
    return(
      <View>

        <Text>{this.props.name}</Text>
        <Text>{this.props.number}</Text>
        <Text>{this.props.unity}</Text>

        <TouchableOpacity onPress={this.props.eventDelete}>
          <Text>Delete</Text>
        </TouchableOpacity>

      </View>
    );
  }

}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  //Global Style
  centerChild: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  //Ingredient Style
  ingredient: {
    width: width / 3,
    height: width / 3,
    padding: 1
  },
  ingredientText: {
    color: 'white'
  },
  ingredientBox: {
    flex: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: '#952115'
  },
  ingredientBoxInfo: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    height: 35
  },
  ingredientBoxNumber: {
    flex: 3,
    backgroundColor: '#c92e1d',
    borderBottomLeftRadius: 5
  },
  ingredientBoxUnity: {
    flex: 2,
    backgroundColor: '#e65c4d',
    borderBottomRightRadius: 5
  },

  //IngredientAdd Style (modal)
  itemAddOrDetail: {
    width: 250,
    height: 300,
    elevation: 6,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  itemAddHeader: {
    alignSelf: 'stretch',
    height: 40,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5
  },
  itemAddContent: {
    flex: 1,
  },
  itemAddButton: {
    alignSelf: 'stretch',
    height: 40,
    backgroundColor: '#e60000',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5
  }
});

export { Ingredient, IngredientAddOrDetail };
