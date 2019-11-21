import React from 'react';
import { Text, View, FlatList, StyleSheet, Image, Button} from 'react-native';



const About = () => {
    return (
        
        <FlatList 
            data={students}
            renderItem={({ item })=>
                <View style={styles.textStyle}>
                    <TouchableOpacity onPress>
                         <Image style={styles.images}
                            source={require('../assets/Talaud.jpg')  }
                       
                        />
                    </TouchableOpacity>   
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

export default About;