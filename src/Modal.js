import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Modal extends React.Component {
  render() {
    return (
      <View style={styles.modal}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title='Dismiss'
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3fa'
  }
})
