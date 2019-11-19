import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

class CounterScreen extends React.Component{
constructor(){
    super();
    this.state ={
        conter:0
    };

}

render(){
    return(

        <View>
             <Text>Counter Screen</Text>
        <Button
            title="Increase"
            onPress={()=>{}}
        />
         <Button
         title="Decrease"
         onPress={()=>{}}
         
       />
       </View>
    //    <Text>conter </>
    );
}
}

// const CounterScreen = ()=>{ 

//         return(
//             <Text>Conter screen</Text>
//         )
// }

const styles = StyleSheet.create({});
export default CounterScreen;