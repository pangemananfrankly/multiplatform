import React from 'react';
import { StyleSheet } from 'react-native';
import ComponentScreen from './screens/ComponentScreen';
import StudentScreen from './screens/StudentScreen';
import HomeScreen from './screens/HomeScreen';
import CounterScreen from './screens/CounterScreen';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Component: ComponentScreen,
  Student: StudentScreen,
  Home: HomeScreen,
  Counter: CounterScreen
  
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Taloda',
    
  }
});

export default createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'

    
  },
});
