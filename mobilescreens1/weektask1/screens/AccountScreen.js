import React from 'react';
import {View,StyleSheet ,FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {useDimensions, useDeviceOrientation} from "@react-native-community/hooks";
import colors from '../app/colors/Config';
import ListItem from '../components/ListItem';
import Icon from '../components/Icon';
import Listitemseperator from '../components/ListItemSeperator';
const AccountScreen = () => {
    // console.log(useDimensions())
    // console.log(useDeviceOrientation());
    // const {landscape} = useDeviceOrientation()
    const menus =[
        {
           title:'My Listings',
           icon:{
               name:'format-list-bulleted',
               backgroundColor:colors.primary,
               iconcolor:'white'
           }
        },
        {
            title:'My Messages',
            icon:{
                name:'email',
                backgroundColor:colors.secondary,
                iconcolor:'white'
            }
         },
    ]
    
    return (
        <View  style={styles.container}>
 <View style={styles.container1}>
<ListItem title='DHANUSHYA' subtitle='dhanushya34678@gmail.com' image={require('../assets/icon.png')} />
 </View>
 <View style={styles.container2}>
<FlatList data={menus} keyExtractor={(menu)=>menu.title}
    
     renderItem={({item})=>(<ListItem title={item.title} 
        IconComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} color={item.icon.iconcolor} />}
    />)}>

</FlatList>
 </View>
 <View style={styles.container3}>
     <ListItem    title='Logout' IconComponent={<Icon name='logout' backgroundColor='orange'  />} />
 </View>
 </View>

    );
}

export default AccountScreen;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#f8f4f4',
        width:'100%',
        height:'100%', 
 
    },
    
    container1: {
       
        backgroundColor:'white',
        width:'100%',
        height:'16%', 
        marginTop:'15%',
   
    
        
    },
    
    container2:{
      width:'100%',
      height:'34%',
      marginTop:'15%'  
    },
    
    container3:{
        width:'100%',
        height:'100%',
        marginTop:'5%'  
      },
      
      
    
})