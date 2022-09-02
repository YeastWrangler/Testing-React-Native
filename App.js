import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Image, Alert } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
       <Button style={styles.button} title="Press to detonate" onPress={() => 
        Alert.alert("Boom!", "Are we all dead now?", [{text: "yep"}, {text: "tis only a flesh wound"}])}/>
      <Text style={styles.text}>Testing? Can you see me on your phone</Text>
      <Image source={{
        height: 200,
        width: 300,
        uri: "https://www.treehugger.com/thmb/TxTW3-7EhJ38OJbkm72e0e_xFps=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1273584292-cbcd5f85f4c646d58f7a7fa158dcaaeb.jpg"}}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'purple',
    fontSize: '100px'
  },
  text: {
    color: 'red',
    fontSize: 50
  },

  button: {
     backgroundColor: 'white',
     fontSize: 30,
     color: 'white'
  }
});
