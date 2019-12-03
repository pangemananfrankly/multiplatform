import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

export default class UserProfileView extends Component {

  render() {
    return (
    <ScrollView>
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../assets/profil.jpg')}/>
                <Text style={styles.name}>Frankly Smit Pangemanan </Text>
                <Text style={styles.userInfo}>Pangemananfrankly@gmail.com </Text>
                <Text style={styles.userInfo}>Talaud </Text>
            </View>
          </View>

          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={require('../assets/Stev.jpg')}/>
                <Text style={styles.name}>Andolo Stevani </Text>
                <Text style={styles.userInfo}>AndoloSetvani@gmail.com </Text>
                <Text style={styles.userInfo}>Talaud </Text>
            </View>
          </View >
          <View style={styles.body}>
           
          <Text>Project Final MultiPlatform</Text>
          <Text>aplikasi sederhana, menampilkan adat dari Suku Talaud</Text>
          
          </View>
{/* 
          <View style={styles.body}>
            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/home/win8/50/ffffff'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Home</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/settings/win8/50/ffffff'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Settings</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/news/win8/50/ffffff'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>News</Text>
              </View>
            </View>

            <View style={styles.item}>
              <View style={styles.iconContent}>
                <Image style={styles.icon} source={{uri: 'https://png.icons8.com/shopping-basket/ios11/50/ffffff'}}/>
              </View>
              <View style={styles.infoContent}>
                <Text style={styles.info}>Shop</Text>
              </View>
            </View>

          </View> */}
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#DCDCDC",
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize:22,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  body:{
    flex: 5,
    backgroundColor: "#778899",
    
    height:500,
    alignItems:'center',
  },
  item:{
    flexDirection : 'row',
  },
  infoContent:{
    flex:1,
    alignItems:'flex-start',
    paddingLeft:5
  },
  iconContent:{
    flex:1,
    alignItems:'flex-end',
    paddingRight:5,
  },
  icon:{
    width:30,
    height:30,
    marginTop:20,
  },
  info:{
    fontSize:18,
    marginTop:20,
    color: "#FFFFFF",
  }
});
 