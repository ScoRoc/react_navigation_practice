import React, { Component } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

import LogoTitle from './LogoTitle';

export default class MenuScreen extends Component {

  static navigationOptions = ({ navigation }) => {

    return {
      headerTitle: <LogoTitle />,
      headerBackTitle: 'Menu',
      headerRight: (
        <Button
          onPress={() => alert('This would sign you out or something!')}
          title='alert something'
          color='#fff'
        />
      )
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle='light-content' />
        <Text>Here's the Home page</Text>
        <Button
          title='Go to Settings page'
          onPress={() => this.props.navigation.navigate('Settings', {
            itemId: 86,
            otherParam: 'anything you want here'
          })}
        />
        <Button
          title='Go to Profile page'
          onPress={() => this.props.navigation.navigate('Profile', {
            itemId: 86,
            otherParam: 'anything you want here'
          })}
        />
        <Button
          title='Go to Details page'
          onPress={() => this.props.navigation.navigate('Details', {
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
