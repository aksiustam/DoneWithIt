import React from 'react'
import {View , Text , FlatList , StyleSheet , Dimensions} from 'react-native';
import CarItem from '../CarItems'
import cars from './cars'


const CarsList = () => {
    return(
        <View style={styles.container}> 
            <FlatList 
            data={cars}
            renderItem={({item}) => <CarItem car={item}/>}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            snapToAlignment={"start"}
            decelerationRate={"fast"}
            snapToInterval={Dimensions.get('window').height}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        width: "100%",
    }
})

export default CarsList;