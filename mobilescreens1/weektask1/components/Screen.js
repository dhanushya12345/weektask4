import React from 'react';
import { SafeAreaView, StyleSheet,View } from 'react-native';
import Constants from 'expo-constants';
const Screen = ({children,style}) => {
    return (
        <SafeAreaView style={[styles.screen,style]}>
            <View style={style}>{children}</View>
        </SafeAreaView>
    );
}

export default Screen;
const styles = StyleSheet.create({
    screen:{
        flex:1,
        paddingTop:Constants.statusBarHeight,
        // backgroundColor:'red'
    },
})