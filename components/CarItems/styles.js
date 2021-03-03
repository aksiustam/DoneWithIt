import {StyleSheet , Dimensions} from 'react-native';

const styles = StyleSheet.create({

  carContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    
  },
  titles:{
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title:{
    fontSize: 35,
    width: "100%",
    fontWeight: "500",
    textAlign: "center",
    textAlignVertical: "center",
  },
  subtitle:{
    fontSize: 16,
    color: "#5c5e62",
  },
  image:{
    width: "100%",
    height: 400,
    position: "absolute",
    top: "27%",
    bottom: "27%",
  },
  buttonContainer:{
    position: "absolute",
    bottom: "3%",
    width: "100%",
    
  },
});

export default styles;