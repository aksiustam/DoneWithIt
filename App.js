import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View} from 'react-native';
import Header from './components/Header'
import CarsList from './components/CarsList'
// ,Image,TouchableHighlight,Alert,Button,Platform, SafeAreaView 
// Local : <Image source={require('./assets/icon.png')} />

export default function App() {



  return (
    
    <View style={styles.container}>
      <Header/>
      <CarsList/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: "center",
    justifyContent: "center"
   
  },
});


/*
      <Text>Hello World!</Text>
      <TouchableHighlight onPress={() => console.log("Pressed")}>
        <Image source={{
          width: 200,
          height: 300,
          uri: "https://picsum.photos/200/300"
        }} />
      </TouchableHighlight>
      

      paddingTop: Platform.OS === "android" ? 40 : 0,
*/