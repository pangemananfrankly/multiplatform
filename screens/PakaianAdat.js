import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Pakaian = [
    { name: 'Gambar1', fakultas: 'Kap.Kep Talaud'} 
    // { name: 'Student #2', fakultas: 'FEB'},
    // { name: 'Student #3', fakultas: 'Nursing'},
    // { name: 'Student #4', fakultas: 'Education' },
    // { name: 'Student #5', fakultas: 'FIK'},
    // { name: 'Student #6', fakultas: 'Filsafat'},
    // { name: 'Student #7', fakultas: 'Pertanian'},
    // { name: 'Student #8', fakultas: 'ASMII'},
    // { name: 'Student #9', fakultas: 'FIK'},
    // { name: 'Student #10', fakultas: 'FIK'}
];

const PakaianAdat = () => {
    return (
        
        <FlatList 
            data={Pakaian}
            renderItem={({ item })=>
                <View style={styles.textStyle}>
                    
                         <Image style={styles.images}
                            source={require('../assets/Talaud.jpg')  }
                         />
                              <Text >
                                 {item.name}
                              </Text>

                             <Text>
                                  {item.fakultas}
                            </Text>
                 </View>
                }
                
            keyExtractor={item => item.name}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginHorizontal: 100,

    },
    images:{
      
        width:"100%",
         height: 200
    },
    button:{
        width:200, 
        height:90
    }
});

export default PakaianAdat;