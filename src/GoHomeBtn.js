import React from 'react';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

const GoHomeBtn = props => {
  return (
    <Button title='Go Home Btn' onPress={() => props.navigation.navigate('Home')} />
  )
};

export default withNavigation(GoHomeBtn);
