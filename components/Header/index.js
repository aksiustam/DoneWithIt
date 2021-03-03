import React from 'react'
import {View , Text,Image,StyleSheet} from 'react-native';

const Header = () => {
    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
            <Image style={styles.menu} source={require('../../assets/images/menu.png')}/>
        </View>
        
    );
};

const styles = StyleSheet.create({
    container:{
        position: "absolute",
        top: 30,
        zIndex: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        paddingHorizontal: 20,
        alignItems: "center",
        
    },
    logo:{
        width: 130,
        height: 60,
        resizeMode: "cover",
    },
    menu:{
        width: 25,
        height: 20,
        
    }
})

export default Header;
