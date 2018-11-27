import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Home = props => {
  return (
    <View style={styles.container}>
      <Text>Here's the HOME page</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
