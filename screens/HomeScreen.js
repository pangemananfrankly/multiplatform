

import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {

    return (

       <View style={styles.container}>
            <ImageBackground source={require('../assets/images/gambar6.jpg')} style={{width: '100%', height: '100%'}}>
            <Text color="red"> Home Screen </Text>
        <View style={styles.container} >
           
             <View style={styles.tengah}>
                 {/*Mengubah warna dan ukuran button */}
                 <Button style={styles.Button}
                    title="Sejarah"
                    onPress={()=> navigation.navigate('Component')}
                   />
             </View>

             <View style={styles.tengah}>
                 {/*Mengubah warna dan ukuran button */}
                 <Button style={styles.Button}
                 title="Pakaian Adat"
                 onPress={()=> navigation.navigate('Student')}
                 />
             </View>
             <View style={styles.tengah}>
                 {/*Mengubah warna dan ukuran button */}
                 <Button style={styles.Button}
                 title="Rumah Adat"
                 onPress={()=> navigation.navigate('')}
                 />
             </View>
             <View style={styles.tengah}>
                 {/*Mengubah warna dan ukuran button */}
                 <Button style={styles.Button}
                  title="Tempat Wisata"
                  onPress={()=> navigation.navigate('')}
                 />
             </View>
             {/* <View style={styles.tengah}>
                 {/*Mengubah warna dan ukuran button */}
                 {/* <TouchableOpacity style={styles.buttonText } 
                  title="About"
                  onPress={()=> navigation.navigate('')}
                  borderRadius="100"
                 >     
                  <Text>
            //             TARI */}
            {/* //          </Text>
            //     </TouchableOpacity>
            //  </View> */} 

             <View style={styles.tengah}>
                 {/*Mengubah warna dan ukuran button */}
                 <Button style={styles.Button} 
                  title="About"
                  onPress={()=> navigation.navigate('')}
                  borderRadius="100"
                 />
             </View>
        

        </View>
        </ImageBackground>  
    </View>
  
    )};

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
    tengah:{
        width: "40%",
        marginVertical:10
    },
    Button:{
        color:"#3498db",
         width:200, 
        height:90,
        fontSize:13, 
       
    },
    // buttonText:{
    //     textAlign: "center"
    // },
    sudut:{
        color:"#3498db",
        width:200, 
       height:90,
    }

    })

   


export default HomeScreen;