import React from 'react';
import { StyleSheet } from 'react-native';
import TabViewExample from './screens/examp';
import UserProfileView from './screens/About';
import Tempatwisata from './screens/Tempatwisata';
import Rumahadat from './screens/Rumahadat';
import PakaianAdat from './screens/PakaianAdat';
import SejarahTalaud from './screens/Sejarah';
import Menu from './screens/Menu'
import { createStackNavigator, createAppContainer } from 'react-navigation';




const navigator = createStackNavigator({
 
  // examp: TabViewExample,
  // Aboutapp: UserProfileView,
  // Tempat: Tempatwisata,
  // Rumah: Rumahadat,
  // pakaian: PakaianAdat,
  // sejarah: SejarahTalaud,
  Home: Menu,
  
  
},{
  initialRouteName: 'Home',
  defaultNavigationOptions: {
  
    headerTitle: 'Taroda',
    headerStyle:{
      backgroundColor: "#03A9F4",
      shadowColor: '#000',
      fontWeight: "bold",
     shadowOpacity: 0.5,
     
    }
    
  }
  
}
 
) 



export default createAppContainer (navigator);

const styles = StyleSheet.create({
  container: {
    flex: 2,
    // alignItems: 'center',
    // justifyContent: 'center',
   

    
  },
});
