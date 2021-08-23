import React from 'react';
import {  StyleSheet ,Image,View,Text} from 'react-native';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks"
import color from '../app/colors/Config';

import ListItem from '../components/ListItem';

const ListDetailScreen = () => {
    console.log(useDimensions())
    console.log(useDeviceOrientation());
    const {landscape} = useDeviceOrientation()
    
   
    return (
        <View style={styles.container}>

        <Image  style={[styles.image,{marginTop:landscape?'1%':'0%',height:landscape?270:280,borderRadius:10}]} source={require('../assets/jacket.jpg')}></Image>
        <Text style={[styles.text,{fontSize:20,marginTop:'3%'}]}>"Red Jacket for Sale"</Text>
        <Text style={[styles.text,{color:color.secondary,fontSize:20}]}>"$70"</Text>
       
        <ListItem 
               image={require("../assets/favicon.png")}
               title="Dhanushya"
               subtitle="5Listings"></ListItem>
              
        
        
         </View>
        

    );
}


const styles = StyleSheet.create({
    container: 
    {
        flex: 1,
        backgroundColor:'white',
        width:'100%',
        height:'100%', 
               },

      image:{
        
          width:'100%',
         flexWrap:'wrap',
         alignContent:'stretch',
         
           },


           text:{
            marginLeft:'10%'
            
            },



})

export default ListDetailScreen;