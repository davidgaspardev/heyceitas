/**
 * @author davidgaspar.dev@gmail.com (David Gaspar)
 */

import React from 'react';

// API: React Navigation
import { createTabNavigator, createStackNavigator } from 'react-navigation';

// APIs of React Native
import { Image } from 'react-native';

// Login Activity
import Login from '../layouts/login/Login';

// Main Activity
import Home from '../layouts/main/home/Home';
import Pantry from '../layouts/main/pantry/Pantry';
import Categories from '../layouts/main/recipes/Categories';
import Recipes from '../layouts/main/recipes/Recipes';
import RecipeDetail from '../layouts/main/recipes/RecipeDetail';
import Settings from '../layouts/main/settings/Settings';

const RecipesRoute = createStackNavigator({

  // List of recipes categories
  Category: {
    screen: Categories
  },

  //List of recipes category
  Recipes: {
    screen: Recipes
  },

  // Recipe Detail
  RecipeDetail: {
    screen: RecipeDetail
  }
},

// Customization (Stack Navigator)
{
  //initialRouteParams: {
  //  list: List
  //},
  headerMode: 'none'
})

const PantryRoute = createStackNavigator({
  Pantry: {
    screen: Pantry
  },
  RecipeDetail: {
    screen: RecipeDetail
  }
},

// Customization (Stack Navigator)
{
  // No header
  headerMode: 'none'
});

const MainRoute = createTabNavigator({

  /**
   * Facility Module
   */
  Home: {
    screen: Home,
    navigationOptions: {

      // Navigation bar icon
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

  /**
   * Pantry Module
   */
  Pantry: {
    screen: Pantry,
    navigationOptions: {

      // Navigation bar icon
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

  /**
   * Recipes Module
   */
  Recipes: {
    screen: RecipesRoute,
    navigationOptions: {

      // Navigation bar icon
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

  /**
   * Settings Module
   */
  Settings: {
    screen: Settings,
    navigationOptions: {

      // Navigation bar icon
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

// Customization (Tab Navigator)
{
  // Navigation bar position
  tabBarPosition: 'bottom',

  // Navigation bar settings
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

  // Register with your Google or Facebook account
  Login: {
    screen: Login
  },

  // Main module, app
  Logged: {
    screen: MainRoute
  }
},

// Customization (Stack Navigator)
{
  // No header
  headerMode: 'none'
});

export default LoginRoute;
