import React from 'react';
import { createTabNavigator, createStackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import List from './Data';

// Login Activity
import Login from '../screens/login/Login';
import Home from '../screens/main/home/Home';

// Main Activity
import Pantry from '../screens/main/pantry/Pantry';
import Categorys from '../screens/main/recipes/Categorys';
import Recipes from '../screens/main/recipes/Recipes';
import RecipeDetail from '../screens/main/recipes/RecipeDetail';
import Settings from '../screens/main/settings/Settings';

const RecipesRoute = createStackNavigator({
  Category: {
    screen: Categorys
  },
  Recipes: {
    screen: Recipes
  },
  RecipeDetail: {
    screen: RecipeDetail
  }
},
// Customization (StackNavigator)
{
  initialRouteParams: {
    list: List
  },
  headerMode: 'none'
})

const MainRoute = createTabNavigator({
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
    screen: RecipesRoute,
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
},
// Customization (TabNavigator)
{
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showIcon: true,
    showLabel: false,
    style: {
      backgroundColor: '#b22214'
    },
    indicatorStyle: {
      opacity: 0
    }
  }
});

const LoginRoute = createStackNavigator({
  Login: {
    screen: Login
  },
  Logged: {
    screen: MainRoute
  }
},
// Customization (StackNavigator)
{
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false
  }
});

export default LoginRoute;
