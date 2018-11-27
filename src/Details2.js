import React, { Component } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

class Details2 extends Component {

  static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;
    return {
      title: params ? params.otherParam : 'A Nested Details2 Screen',
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor
    }
  };

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={styles.container}>
        <StatusBar barStyle='dark-content' />
        <Text>Details2 Screen</Text>
        <Text>------------------</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Text>------------------</Text>
        <Text>itemId: {params.itemId}</Text>
        <Text>otherParam: {params.otherParam}</Text>

        <Button
          title='Update the title'
          onPress={() => navigation.setParams({otherParam: 'Updated!'})}
        />
        <Text>------------------</Text>

        <Button
          title='Go to Details page...again'
          onPress={() => this.props.navigation.push('Details2', {
            itemId: Math.floor(Math.random() * 100)
          })}
        />
        <Button
          title='Go to Home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title='Go back'
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title='Pop to top....??'
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Details2;
