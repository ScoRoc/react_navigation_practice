import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default OtherScreen = props => {
  return (
    <View style={styles.container}>
      <Text>What's an Other screen???</Text>
      <Button
        title='Open drawer'
        onPress={() => props.navigation.openDrawer()}
      />
      <Button
        title='Go to settings'
        onPress={() => props.navigation.navigate('Settings')}
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
