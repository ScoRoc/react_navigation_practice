import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const Profile = props => {
  return (
    <View style={styles.container}>
      <Text>Here's the Profile page</Text>
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

export default Profile;
