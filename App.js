import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';

import Home from './src/Home';
import MenuScreen from './src/MenuScreen';
import Details from './src/Details';
import Details2 from './src/Details2';
import Modal from './src/Modal';
import Settings from './src/Settings';
import Profile from './src/Profile';
import OtherScreen from './src/OtherScreen';
import AnotherScreen from './src/AnotherScreen';
import MoreScreen from './src/MoreScreen';

const MainStack = createStackNavigator(
  {
    Home,
    Details,
    Details2
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTintStyle: {
        fontWeight: 'bold'
      }
    },
    // navigationOptions: {
    //   tabBarLabel: 'Homey Home'
    // }

  }
);

const HomeStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: Modal
    }
  },
  {
    mode: 'modal',
    headerMode: 'none'
  }
);

const MenuStack = createStackNavigator(
  {
    Menu: MenuScreen,
    Settings,
    Profile,
    Details
  },
  {
    initialRouteName: 'Menu',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTintStyle: {
        fontWeight: 'bold'
      }
    }
  }
);

const OtherDrawer = createDrawerNavigator(
  {
    Other: OtherScreen,
    Another: AnotherScreen,
    More: MoreScreen
  },
  {
    // drawerWidth: 250,
    drawerPosition: 'right',
    drawerBackgroundColor: '#411',
    contentOptions: {
      activeTintColor: 'yellow',
      inactiveTintColor: '#aaa',
      activeBackgroundColor: '#622',
      inactiveBackgroundColor: '#311'
    }
  }
);

const TabNav = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Menu: { screen: MenuStack },
    Other: { screen: OtherDrawer }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // stuff here
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'grey',
      activeBackgroundColor: '#4fd',
      inactiveBackgroundColor: '#053',
      style: {
        height: 80,
      },
      tabStyle: {
        // paddingBottom: 35
      },
      labelStyle: {
        paddingBottom: 31,
        fontSize: 15
      },
      safeAreaInset: {
        bottom: 'never'
      }
    }
  }
);

// const AppContainer = createAppContainer(RootStack);

export default createAppContainer(TabNav);
// export default createAppContainer(RootStack);
// export default class App extends React.Component {
//   render() {
//     return (
//       <AppContainer />
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
