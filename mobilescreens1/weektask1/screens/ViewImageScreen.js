import React from 'react';
import {  StyleSheet ,Image,View,SafeAreaView} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import colors from '../app/colors/Config';
import{MaterialCommunityIcons} from '@expo/vector-icons';
const ViewImageScreen = () => {
    const {landscape} = useDeviceOrientation()
   
    return (
 <SafeAreaView style={[styles.container,{}]}>
      <View style={{flexDirection:'row-reverse',justifyContent:'space-between',marginTop:landscape?'5%':'14%'}}>
             {/* <View style={[styles.box,{backgroundColor:colors.primary,marginRight:'10%'}]}/> */}
             <MaterialCommunityIcons name='trash-can-outline' size={50} color='white'   />
              <MaterialCommunityIcons name='close' size={50} color='white'   />
             
            {/* <View style={[styles.box,{backgroundColor:colors.secondary, marginLeft:'10%'}]}/> */}
      </View>
            <Image  style={[styles.image,{marginTop:landscape?'1%':'24%',height:landscape?270:431}]} resizeMode={'stretch'} source={require('../assets/chair.jpg')}></Image>
</SafeAreaView>

    );
}


const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor:colors.bgcolor,
        width:'100%',
        height:'100%', 
               },

      image:{
        
          width:'100%',
         flexWrap:'wrap'
    ,alignContent:'stretch',
           },

      box: {
         width: 50,
         height: 50,
           } 

})

export default ViewImageScreen;