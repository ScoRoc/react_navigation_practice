import React, { Component } from 'react';
import { Button, StatusBar, StyleSheet, Text, View } from 'react-native';

class Details extends Component {

  state = {
    count: 0
  };

  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};

    return {
      title: navigation.getParam('otherParam', 'navOps', 'A Nested Details Screen'),
      headerRight: (
        <Button
          // this will cause a warning bc it loads before componentDidMount
          // meaning that when it first loads, onPress is undefined
          // but after componentDidMount runs, then it will work
          onPress={navigation.getParam('increaseCount')}
          title='add 1'
          color='#fff'
        />
      )
    }
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count +1 })
  }

  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  render() {
    const { navigation } = this.props;
    const { params } = navigation.state;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Text>count: {this.state.count}</Text>
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
          onPress={() => this.props.navigation.push('Details', {
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

export default Details;
