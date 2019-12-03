import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
// import { SizeClassIOS } from 'expo/build/ScreenOrientation/ScreenOrientation';

const SejarahTalaud = () => {

    const myName = 'John Doe';
    const helloWorld = <Text>Hello World</Text>;

    return (
        
        <SafeAreaView style={styles.container}>
             <ScrollView style={styles.scrollView}>
             <View>
                  <Image 
                      style={styles.image}
                     source={require('../assets/RUMAH.jpg')}
                 />
            </View>
             <ScrollView >
                     <View style={styles.bodyView}>
                        <View>
            <Text  style={styles.textStyle} > 
            Berdasarkan  temuan  ahli, tempat   tinggal  manusia  sangihe  saman  pra  sejarah  adalah  di  goa – goa  karang. Dalam  legenda,  tempat  tinggal  manusia  sangihe   purba adalah  di dahan  pohon  besar  dan di pohon  –   pohon yang  roboh.  Seiring  perkembangan  waktu  dan dikenalnya  teknologi,  mereka  mulai  membuat  rumah – rumah  sederhana.

Pada  awalnya  bentuk rumah  sangat   sederhana. Berdasarkan pemahaman beberapa  budayaan  sangihe bahwa 

rumah  orang  sangihe  adalah  pamangkonang. Kemudian  berkembang menjadi  rumah  ikat. Dikatakan  rumah  ikat  karena  tidak menggunakan paku  tetapi diikat dengan  rotan.

Rumah  suku  sangihe  tidak  memiliki  bilik atau kamar. Sejak  masuknya  spanyol di  kepulauan  sangihe, orang sangihe  sudah  mulai  mendirikan  rumah dengan  konstruksi beton  menggunakann semen  dari  karang  yang dibakar. Di masa awal  kolonial  belanda  akhir  1700  sampai awal thn 1800  orang sangihe sudah  mulai  menggunakan  bilik  pada konstruksi  rumah. Rumah  ikat  terakhir  ditemukan  di  kampung Lehupu.
Konstruksi  rumah  kayu   orang  sangihe adalah  rumah panggung.  Rumah  sangihe berdasarkan catatan  D.Brilman adalah :  Rumah-rumah dibangun  diatas  tiang  tinggi, memiliki  tangga masuk kerumah yang diangkat  pada waktu  malam  hari. Terdapat  satu  serambi umum yang  luas dan  satu bilik tinggal  yang  sama  luasnya dengan serambi umum.Disebelah  kiri  dan  kanan  terdapat  bilik tidur  yang  dipisahkan  oleh dinding kayu,bamboo atau  tirai. Jika salah  satu  anggota  keluarga  menikah  maka rumah  akan disambung dibagian  belakang. Semakin  banyak  yang  menikah maka  akan  semakin  panjang  rumahnya.  Rumah  seperti  ini ditempati  oleh 25 sampai 30 rumah tangga. Konstruksi  rumah sperti  ini  terakhir  ditemukan di pulau-pulau Nanusa. Banyak  rumah  asli  orang  sangihe  mengalami pemusnahan  akibat letusan  gunung  api.
            </Text>
                        </View>
                    </View>
             </ScrollView>   
             </ScrollView>
    </SafeAreaView> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
      },
      scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 10,
      },
   
    textStyle: {
        fontSize: 16,
        color: 'black',
       
        textAlign: 'center',
    },
    textStyle2: {
        fontSize: 1,
        color: 'red'
    },
    size:{
        
        width: "50%", 
        height: "20%",
        justifyContent: "center"
       
    },
    title:{
        fontSize:18,
        flex:1,
      },
      bodyView:{
          color: 'black'
      },
      image: {
        flex: -1,
        width: 350,
        height: 200,
        resizeMode: 'contain'
    }

});

export default SejarahTalaud;