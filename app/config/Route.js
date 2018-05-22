import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import Login from '../screens/login/Login';
import Home from '../screens/main/Home';
import Pantry from '../screens/main/Pantry';
import Category from '../screens/main/recipes/Category';
import Recipes from '../screens/main/recipes/Recipes';
import RecipeDetail from '../screens/main/recipes/RecipeDetail';
import Settings from '../screens/main/Settings';

const RecipesNavigation = StackNavigator({
  Category: {
    screen: Category
  },
  Recipes: {
    screen: Recipes
  },
  RecipeDetail: {
    screen: RecipeDetail
  }
}, {
  headerMode: 'none'
})

const MainNavigation = TabNavigator({
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
    screen: RecipesNavigation,
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

const LoginNavigation = StackNavigator({
  Login: {
    screen: Login
  },
  Logged: {
    screen: MainNavigation
  }
}, {
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
});

export default LoginNavigation;
