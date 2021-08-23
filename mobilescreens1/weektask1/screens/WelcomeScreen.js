
import React from 'react';
import { Text, View , Image, ImageBackground, StyleSheet, _View ,TouchableOpacity,Alert} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import colors from '../app/colors/Config';
import LoginButton from '../components/LoginButton';
const WelcomeScreen = () => {
    console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()
    

    return (
     <View style={{ flex:1,width:'100%',height:'100%',}}>
 <ImageBackground source={require('../assets/background.jpg')} resizeMode="stretch"  style={{width: '100%', height: '100%',}}>
           
       <View style={{flex:1,}}>
            <Image  style={[styles.logo,{marginTop:landscape?'10%':'20%'}]} source={require('../assets/logo-red.png')}></Image>
            <Text  style={[styles.text,{paddingLeft:landscape?210:118,}]}>Sell What You Don't Need</Text>
             
            {/* <View style={[styles.container1,{marginTop:landscape?"10%":"90%"}]}></View>
             <View style={styles.container2} ></View> */}
             <View style={{marginTop:landscape?'0%':'80%',height:'90%'}}>
              <LoginButton title="login" color={colors.primary} myPress={openTwoButtonAlert} > </LoginButton>
              <LoginButton title="Signup" color={colors.secondary}> </LoginButton>
              </View>

       </View> 
    </ImageBackground>
     </View>
    );
}


// openTwoButtonAlert=()=>{
//     console.log('you pressed the button');
//     Alert.alert(
//       'EXIT!',
//       'Are You sure you want to exit',
//       [
//         {text: 'Yes', onPress: () => console.log('You have clicked Yes button ')},
//         {text: 'No', onPress: () => console.log('You have clicked No button '), style: 'cancel'},
//       ],
//       { 
//         cancelable: true 
//       }
//     );
//   }


const styles = StyleSheet.create({  
logo:{
            paddingTop:"10%",
            alignItems:'center',
            justifyContent:'space-between',
            width: 120,
            height: 120,
          
           marginLeft:'35%'
          },
   text:{
            alignItems:'center',
           paddingLeft:118,
           
        },
                
   container1:{
            flex:1,
            backgroundColor:colors.primary,
            
           
        },

    container2:{
      
        flex:1,
        backgroundColor:colors.secondary,   
         },
         text1:{
            color:'white',
            marginLeft:'45%',
            alignItems:'center',
            justifyContent:'center'
        }

})

export default WelcomeScreen;