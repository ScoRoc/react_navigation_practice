import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './src/Home';
import Details from './src/Details';
import Details2 from './src/Details2';
import Modal from './src/Modal';
import Settings from './src/Settings';
import Profile from './src/Profile';

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

const RootStack = createStackNavigator(
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
)

// const Tabs = createBottomTabNavigator({
//   Home,
//   Settings
// });
const AppContainer = createAppContainer(RootStack);

// export default createAppContainer(Tabs);
export default createAppContainer(RootStack);
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
