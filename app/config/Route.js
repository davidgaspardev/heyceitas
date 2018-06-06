import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Image } from 'react-native';

import List from './Data';

// Login Activity
import Login from '../screens/login/Login';
import Home from '../screens/main/home/Home';

// Main Activity
import Pantry from '../screens/main/Pantry';
import Categorys from '../screens/main/recipes/Categorys';
import Recipes from '../screens/main/recipes/Recipes';
import RecipeDetail from '../screens/main/recipes/RecipeDetail';
import Settings from '../screens/main/Settings';

const RecipesRoute = StackNavigator({
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

/*const CategoryRoute = TabNavigator({
  Others: {
    screen: RecipesRoute(DataOthers),
    navigationOptions: {
      title: 'Outros'
    }
  },
  Fits: {
    screen: RecipesRoute(DataFits),
    navigationOptions: {
      title: 'Fits'
    }
  },
  Vegans: {
    screen: RecipesRoute(DataVegans),
    navigationOptions: {
      title: 'Veganos'
    }
  },
  Countries: {
    screen: RecipesRoute(DataCountries),
    navigationOptions: {
      title: 'Paises'
    }
  }
},
// Customization (TabNavigator)
{
  swipeEnabled: false,
  tabBarOptions: {
    inactiveTintColor: '#555555',
    activeTintColor: '#952115',
    style: {
      backgroundColor: 'white'
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    indicatorStyle: {
      opacity: 0
    }
  }
})*/

const MainRoute = TabNavigator({
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
      backgroundColor: '#952115'
    },
    indicatorStyle: {
      opacity: 0
    }
  }
});

const LoginRoute = StackNavigator({
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
