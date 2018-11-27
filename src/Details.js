import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Details = props => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Details;
