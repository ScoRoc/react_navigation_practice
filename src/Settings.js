import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Settings = props => {
  return (
    <View style={styles.container}>
      <Text>Here's the Settings page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Settings;
