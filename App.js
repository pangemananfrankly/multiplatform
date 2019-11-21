import React from 'react';
import { StyleSheet } from 'react-native';
import SejarahTalaud from './screens/Sejarah';
import PakaianAdat from './screens/PakaianAdat';
import Menu from './screens/Menu';
import About from './screens/About';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const navigator = createStackNavigator({
  Aboutapp: About,
  sejarah: SejarahTalaud,
  pakaian: PakaianAdat,
  Home: Menu
  
  
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerTitle: 'Taloda',
    headerStyle:{
      backgroundColor:'#add8e6',
        height: 40,
        marginTop: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
     shadowOpacity: 0.2,
    
    },
    // headerRight: {

    // }
    // headerBackImage:'../assets/icon.png'
    // leftComponent :{{ icon: 'menu', color: '#fff' }},
    // centerComponent:{{ text: 'MY TITLE', style: { color: '#fff' } }}
    // rightComponent:{{ icon: 'home', color: '#fff' }
    
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
