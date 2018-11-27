import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default MoreScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Hway ooooooooo? More Screen MOAR!!!</Text>
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
