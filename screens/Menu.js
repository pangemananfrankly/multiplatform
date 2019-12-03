
import React from 'react';
import {  View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
// import TabViewExample from './examp';
import Header from './Header';
import infSejarah from './infsejarah';
import UserProfileView from './About';
import Tempatwisata from './Tempatwisata';
import Rumahadat from './Rumahadat';
import PakaianAdat from './PakaianAdat';
import SejarahTalaud from './Sejarah';




// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          
//       </View>
//     );
//   }
// }

class Pakaian extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Header />
        <PakaianAdat/>
      </View>
    );
  }
}

class Rumah extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Header />
          <Rumahadat/>   
        </View>
      );
    }
  }

  class Tempat extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
             <Header />
          <Tempatwisata/>
        </View>
      );
    }
  }

  class About extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
           <Header />
          <UserProfileView/>
        </View>
      );
    }
  }


  class IconWithBadge extends React.Component {
    render() {
      const { name, badgeCount, color, size } = this.props;
      return (
        <View style={{ width: 24, height: 24, margin: 5 }}>
          <Ionicons name={name} size={size} color={color} />
          {badgeCount > 0 && (
            <View
              style={{
                // /If you're using react-native < 0.57 overflow outside of the parent
                // will not work on Android, see https://git.io/fhLJ8
                position: 'absolute',
                right: -6,
                top: -3,
                backgroundColor: 'red',
                borderRadius: 6,
                width: 12,
                height: 12,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ color: 'white', fontSize: 10, fontWeight: 'bold' }}>
                {badgeCount}
              </Text>
            </View>
          )}
        </View>
      );
    }
  }
  
  const HomeIconWithBadge = props => {
    // You should pass down the badgeCount in some other ways like context, redux, mobx or event emitters.
    // return <IconWithBadge {...props} badgeCount={3} />;
  };
  
  const getTabBarIcon = (navigation, tintColor) => {
    const { routeName } = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName == 'Sejarah') {
      iconName = `ios-globe`;
      // We want to add badges to home tab icon
      // IconComponent = HomeIconWithBadge;
    }
    if (routeName == 'PakaianAdat') {
      iconName = `ios-shirt`;
    } if (routeName == 'RumahAdat') {
      iconName = `md-home`;
    } if (routeName == 'TempatWisata') {
      iconName = `ios-pin`;
    } if (routeName == 'About') {
      iconName = `ios-information-circle`;}
  
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
  };


const Home = createBottomTabNavigator({
  Sejarah: { screen: SejarahTalaud },
 PakaianAdat: { screen: Pakaian },
 RumahAdat: { screen: infSejarah },
 TempatWisata: { screen: Tempat },
 About : {screen:UserProfileView},
 
   },
   {
     defaultNavigationOptions: ({ navigation }) => ({
       tabBarIcon: ({ focused, tintColor }) =>
         getTabBarIcon(navigation, tintColor),
     }),
     tabBarOptions: {
       activeTintColor: 'tomato',
       inactiveTintColor: 'gray',
     }

    })
  //  Menu = createDrawerNavigator({
  //   profil: {screen:UserProfileView}
  //  });

export default createAppContainer(Home);

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#329BCB',
    flexDirection: 'row',
    padding: 20
},
header_item: {
    flex: 1
},
header_button: {
    flexDirection: 'row'
},
text_center: {
    textAlign: 'center'
},
text_right: {
    textAlign: 'right'
},
header_text: {
    color: '#fff',
    fontSize: 20
},
bold_text: {
    fontWeight: 'bold'
},
})

// import React from 'react';
// import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

// const Menu = ({navigation}) => {

// return (


//     <View style={styles.container} >

//          <Text style = {styles.myState}>
//              talaud
//          </Text>


//     </View>





//     //  <View style={styles.container}>
//     //      <ImageBackground source={require('../assets/Talaud.jpg')} style={styles.image}>
//     //          <Text color="red"> Home Screen </Text>
//     //              <View style={styles.container} >
           
//     //                     <View style={styles.tengah}>
//     //                           {/*Mengubah warna dan ukuran button */}
//     //                         <TouchableOpacity>
//     //                              <Button style={styles.Button}
//     //                                  title="Sejarah"
//     //                                  onPress={()=> navigation.navigate('sejarah')}
//     //                              />
//     //                          </TouchableOpacity>
//     //                      </View>

//     //                      <View style={styles.tengah}>
//     //                          {/*Mengubah warna dan ukuran button */}
//     //                       <TouchableOpacity>
//     //                           <Button style={styles.Button}
//     //                              title="Pakaian Adat"
//     //                             onPress={()=> navigation.navigate('pakaian')}
//     //                          />
//     //                       </TouchableOpacity>
//     //                      </View>

//     //                     <View style={styles.tengah}>
//     //                           {/*Mengubah warna dan ukuran button */}
//     //                             <TouchableOpacity>
//     //                                  <Button style={styles.Button}
//     //                                       title="Rumah Adat"
//     //                                       onPress={()=> navigation.navigate('Rumah')}
//     //                                  />
//     //                             </TouchableOpacity>
//     //                      </View>

//     //                    <View style={styles.tengah}>
//     //                           {/*Mengubah warna dan ukuran button */}
//     //                              <TouchableOpacity>
//     //                                  <Button style={styles.Button}
//     //                                       title="Tempat Wisata"
//     //                                       onPress={()=> navigation.navigate('Tempat')}
//     //                                  />
//     //                              </TouchableOpacity>
//     //                      </View>
             
//     //                       <View style={styles.tengah}>
//     //                             {/*Mengubah warna dan ukuran button */}
//     //                               <TouchableOpacity>
//     //                                   <Button style={styles.Button} 
//     //                                       title="Galeri"
//     //                                       onPress={()=> navigation.navigate('Aboutapp')}
//     //                                       borderRadius="100"
//     //                                      />
//     //                                </TouchableOpacity>
//     //                       </View>

//     //                       <View style={styles.tengah}>
//     //                              {/*Mengubah warna dan ukuran button */}
//     //                                  <TouchableOpacity>
//     //                                       <Button style={styles.Button} 
//     //                                          title="About"
//     //                                          onPress={()=> navigation.navigate('Aboutapp')}
//     //                                          borderRadius="100"
//     //                                       />
//     //                                 </TouchableOpacity>
//     //                       </View>

//     //                       <View style={styles.tengah}>
//     //                              {/*Mengubah warna dan ukuran button */}
//     //                                  <TouchableOpacity>
//     //                                       <Button style={styles.Button} 
//     //                                          title="examp"
//     //                                          onPress={()=> navigation.navigate('examp')}
//     //                                          borderRadius="100"
//     //                                       />
//     //                                 </TouchableOpacity>
//     //                       </View>
            
//     //          </View>
//     //     </ImageBackground>  
//     // </View>
 
//  )};

//     const styles = StyleSheet.create({
//         myState: {
//             marginTop: 20,
//             textAlign: 'center',
//             color: 'blue',
//             fontWeight: 'bold',
//             fontSize: 20
//          },
//         container: {
//             flex: 1,
//             height: 350,
//          color: 'red',
//         //     justifyContent: '',
//         //     alignItems: 'center'
//         },
//     menu:{
//         color: 'blue',
//         width:'10%'
//     },
//     tengah:{
//         width: "40%",
//         marginVertical:10
//     },
//     Button:{
//         color:"#3498db",
//          width:200, 
//         height:90,
//         fontSize:13, 
       
//     },
//   image:{

//    width: "100%",
//    height:"100%"
   
//     },
//     sudut:{
//         color:"#3498db",
//         width:200, 
//        height:90,
//     }

//     })

   


// export default Menu;