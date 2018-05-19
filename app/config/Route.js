import React from 'react';
import { TabNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Home from '../screens/Home';
import Pantry from '../screens/Pantry';
import Recipes from '../screens/Recipes';
import Settings from '../screens/Settings';

// Navigation Bar | HeyCeitas
export default TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
         <Image
          source={require('../images/icons/home.png')}
          style={{
            tintColor: tintColor,
            width: 24,
            height: 24
          }}
        />
      )
    }
  },
  Pantry: {
    screen: Pantry,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icons/pantry.png')}
          style={{
            tintColor: tintColor,
            width: 24,
            height: 24
          }}
        />
      )
    }
  },
  Recipes: {
    screen: Recipes,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icons/recipes.png')}
          style={{
            tintColor: tintColor,
            width: 24,
            height: 24
          }}
        />
      )
    }
  },
  Settings: {
    screen: Settings,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Image
          source={require('../images/icons/settings.png')}
          style={{
            tintColor: tintColor,
            width: 24,
            height: 24
          }}
        />
      )
    }
  }
},{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#952115'
    },
    indicatorStyle: {
      opacity: 0
    }
  }
});
