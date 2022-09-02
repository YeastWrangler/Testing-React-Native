import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, Alert, ImageBackground, } from 'react-native';

export default function App() {

  return (
    
      <ImageBackground style={styles.backGround}source={{
        uri: "https://www.we-love-pets.co.uk/hubfs/A05I8719-1.jpg"}}>
          <View style={styles.logoBox}>
      <Image style={[styles.container, styles.logo]} source={{uri: "https://images-platform.99static.com/OIRRT4xa5hwUOYh3r9nQoxbDf_w=/0x0:2000x2000/500x500/top/smart/99designs-contests-attachments/101/101748/attachment_101748619"}}/>
      <Text style={styles.text}>Pet Some Lonely Doggos!</Text>
          </View>
          <View
          style={styles.button}>
            <Button style={styles.text2} title="Login as Sitter"
  color="#841584"/>
        </View> 
        <View style={styles.button2}>
        <Button style={styles.text2} title="Login as Pet Owner"
  color="#841584"/>
        </View>
       
   </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    
  },
  text: {
    color: 'darkblue',
    fontSize: 25,
    alignItems: "center",
   
    top: 90,
    line: 0
  },

  text2: {
    color: 'white',
    fontSize: 23,
    alignItems: "center",
    
    
  },

  button: {
    width:"100%",
    height:50,
    backgroundColor: "pink",
    justifyContent: "flex-end"
  },
  button2: {
    width:"100%",
    height:50,
   backgroundColor: "#fc5c65",
    justifyContent: "flex-end"
  },

  backGround: {
    flex: 1,
    justifyContent: 'flex-end',
    
  },

  logo: {
    width: 120,
    height: 100,
    padding:20,
    margin:10,
    position: "absolute",
 

  },

  logoBox: {
    position: "absolute",
    top: 40,
    alignItems: "center",
    left: 50
  }
});
