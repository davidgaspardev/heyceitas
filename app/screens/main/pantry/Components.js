/**
 * @author davidgaspar.dev@gmail.com
 */
import React from 'react';
import { TouchableOpacity, StyleSheet, Dimensions, TextInput, Modal, View, Text } from 'react-native'

// Header Component
class Header extends React.Component {

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>Armario</Text>
      </View>
    );
  }

}

//Ingredient Component
class Ingredient extends React.Component {

  render() {
    return (
      <TouchableOpacity style={styles.ingredient}>

        <View style={[styles.ingredientBox, styles.centerChild]}>
          <Text>{this.props.name}</Text>
          <Text>{this.props.quantity}</Text>
        </View>
      </TouchableOpacity>
    )
  }

}

//IngredientAdd Component
class IngredientAdd extends React.Component {

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
        onRequestClose={() => {
          alert('Modal has been closed.');
        }}>

          <View style={[{ flex: 1 }, styles.centerChild]}>

            <View style={styles.itemAdd}>

              <View>
                <Text>Adicionar Ingrediente</Text>
              </View>

              <TextInput  onChangeText={this.props.onChangeName} placeholder="Nome do ingrediente"/>
              <TextInput  onChangeText={this.props.onChangeNumber} placeholder="Quantidade do ingrediente"/>
              <TextInput  onChangeText={this.props.onChangeUnity} placeholder="Unidade da quantidade"/>

              <TouchableOpacity style={styles.itemAddButton} onPress={this.props.onpress}>
                <Text>Add</Text>
              </TouchableOpacity>

            </View>

          </View>

      </Modal>
    )
  }

}

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  //Global Style
  centerChild: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  //Header Style
  header: {
    alignSelf: 'stretch',
    height: 48,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 36,
    fontFamily: 'umbrella',
    color: '#952115'
  },

  //Ingredient Style
  ingredient: {
    width: width / 3,
    height: width / 3
  },
  ingredientBox: {
    flex: 1,
    backgroundColor: '#CFCFCF',
    margin: 1
  },
  itemName: {
    fontSize: 20,
    //fontWeight: 'bold',
    color: 'white'
  },

  //IngredientAdd Style (modal)
  itemAdd: {
    width: 250,
    height: 250,
    elevation: 6,
    backgroundColor: 'white'
  },
  itemAddButton: {
    alignSelf: 'stretch',
    backgroundColor: '#e60000',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export { Header, Ingredient, IngredientAdd }
