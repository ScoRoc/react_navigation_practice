import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default AnotherScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Wuuut? Another Another!!!</Text>
      <Button
        title='Open drawer'
        onPress={() => props.navigation.openDrawer()}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
