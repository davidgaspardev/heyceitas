import React from 'react';
import { TouchableOpacity, StyleSheet, FlatList, Image, View, Text } from 'react-native';

export default class Category extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      list: []
    }
  }

  componentWillMount() {

    const { state } = this.props.navigation;

    this.setState({
      list: state.params.list
    })
  }

  render() {

    return(
      <View style={styles.container}>

        <FlatList
          data={this.state.list}
          renderItem={({item}) => this._renderItem(item)}
        />

      </View>
    );
  }

  _renderItem(item) {
    return <CategoryItem title={item.name} src={item.image} onpress={() => this.props.navigation.navigate('Recipes', item.event)}/>
  }
}

class Header extends React.Component {

  render() {
    return(
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Categorias</Text>
      </View>
    )
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
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    alignSelf: 'stretch',
    height: 48,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  headerTitle: {
    fontSize: 36,
    fontFamily: 'umbrella',
    color: '#952115'
  },

  item: {
    height: 200,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    marginTop: 2.5,
    marginLeft: 5,
    marginBottom: 2.5,
    marginRight: 5,
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
