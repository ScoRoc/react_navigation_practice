import React, { Component } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import LogoTitle from './LogoTitle';

class Home extends Component {

  static navigationOptions = {
    // title: 'Home'
    headerTitle: <LogoTitle />
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Text>Here's the Home page</Text>
        <Button
          title='Go to Details page'
          onPress={() => this.props.navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here'
          })}
        />
        <Button
          title='Go to Details2 page'
          onPress={() => this.props.navigation.navigate('Details2', {
            itemId: 86,
            otherParam: 'anything you want here'
          })}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
