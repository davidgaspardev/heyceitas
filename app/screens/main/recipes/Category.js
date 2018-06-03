import React from 'react';
import { TouchableOpacity, StyleSheet, FlatList, Image, View, Text } from 'react-native';

export default class Category extends React.Component {

  constructor(props) {
    super(props)

    let { navigation } = this.props;

    this.state = {
      list: navigation.state.params.list
    }
  }

  /*componentWillMount() {
    this.setState({
      list: [
        {
          "name": "Brasileiras",
          "image": require("../../../images/category/brazilian.jpg"),
          "event": {
            "category": "brazilian"
          }
        },
        {
          "name": "Carnes",
          "image": require("../../../images/category/meat.jpg"),
          "event": {
            "category": "meat"
          }
        },
        {
          "name": "Doces",
          "image": require("../../../images/category/candy.jpg"),
          "event": {
            "category": "candy"
          }
        },
        {
          "name": "Doces Fit",
          "image": require("../../../images/category/sweet_fit.jpg"),
          "event": {
            "category": "sweet_fit"
          }
        },
        {
          "name": "Doces Veganos",
          "image": require("../../../images/category/sweet_vegan.jpg"),
          "event": {
            "category": "sweet_vegan"
          }
        },
        {
          "name": "Francesa",
          "image": require("../../../images/category/french.jpg"),
          "event": {
            "category": "french"
          }
        },
        {
          "name": "Frango",
          "image": require("../../../images/category/chicken.jpg"),
          "event": {
            "category": "chicken"
          }
        },
        {
          "name": "Italiano",
          "image": require("../../../images/category/italian.jpg"),
          "event": {
            "category": "italian"
          }
        },
        {
          "name": "Massas",
          "image": require("../../../images/category/pastas.jpg"),
          "event": {
            "category": "pastas"
          }
        },
        {
          "name": "Práticas",
          "image": require("../../../images/category/practices.jpg"),
          "event": {
            "category": "practices"
          }
        },
        {
          "name": "Sopas",
          "image": require("../../../images/category/soups.jpg"),
          "event": {
            "category": "soups"
          }
        },
        {
          "name": "Sucos",
          "image": require("../../../images/category/juices.jpg"),
          "event": {
            "category": "juices"
          }
        },
        {
          "name": "Salgados Fit",
          "image": require("../../../images/category/salty_fit.jpg"),
          "event": {
            "category": "salty_fit"
          }
        },
        {
          "name": "Salgados Veganos",
          "image": require("../../../images/category/salty_vegan.jpg"),
          "event": {
            "category": "salty_vegan"
          }
        },
        {
          "name": "Vegetarianos",
          "image": require("../../../images/category/vegetarian.jpg"),
          "event": {
            "category": "vegetarian"
          }
        }
      ]
    })
  }*/

  render() {

    return(
      <View style={styles.container}>

        <FlatList
          data={this.state.list}
          renderItem={({item}) => <CategoryItem src={item.image} title={item.name} onpress={() => this.props.navigation.navigate('Recipes', item.event)}/>}
        />

      </View>
    );
  }
}

class CategoryItem extends React.Component {

  render() {

    return(
      <TouchableOpacity style={styles.item} onPress={this.props.onpress}>

        <Image source={this.props.src} style={styles.itemImage}/>

        <View style={styles.itemLegende}>

          <Text style={styles.itemText}>{this.props.title}</Text>

        </View>

      </TouchableOpacity>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1
  },
  item: {
    height: 200,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    margin: 5,
    elevation: 3,
    borderRadius: 5
  },
  itemImage: {
    borderRadius: 5,
    height: '100%',
    width: '100%'
  },
  itemLegende: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba( 0, 0, 0, .3)',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemText: {
    margin: 10,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'rgba( 255, 255, 255, 0.8)'
  }
});
