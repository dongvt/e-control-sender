import React, { useState, useRef } from "react";
import { StyleSheet, Text ,TextInput, View,Button } from "react-native";

import Socket from './app/socket/socket.js';


let socket = new Socket();

export default function App() {
  const inputTextRef = useRef(null);
  const [textContent,setTextContent] = useState('');

  let textInputFocusHandler = () => {
    inputTextRef.current.focus();
  }

  let textInputChangeHandler = (text) => {
    setTextContent(text);
    socket.type(text);
    setTextContent('BUENO');
  }

  let onTouchEvent = (ev) => {
    console.log(
      ev.nativeEvent
      //`[${name}] ` +
        // `root_x: ${ev.nativeEvent.pageX}, root_y: ${ev.nativeEvent.pageY} ` +
        // `target_x: ${ev.nativeEvent.locationX}, target_y: ${ev.nativeEveZznt.locationY} ` //+
       // `target: ${ev.nativeEvent.target}`
    );
  }

  return (
    <View style={styles.container}>
      <View 
        style={styles.touchSection}
        onStartShouldSetResponder={(ev) => true}
        onResponderMove={onTouchEvent}>
      </View>
    
      <TextInput 
        ref = {inputTextRef}
        onChangeText={textInputChangeHandler}
        value = {textContent}
      />
      
      <Button title='Che este s un boton' onPress={textInputFocusHandler}/>

      <View
          style={{
            borderColor: "red",
            borderWidth: 1,
            padding: 16,
            marginTop: 20
          }}
        >
          <Text style={{ marginBottom: 8 }}>Show Typing Values:</Text>
          <Text>{textContent}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  touchSection: {
    width: '100%',
    height: '50%',
    borderColor: "green",
    borderWidth: 1,
    padding: 16,
    marginTop: 20
  }
});
