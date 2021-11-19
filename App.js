import React, { useState, useRef } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

import Socket from "./app/socket/socket.js";

let socket = new Socket();

export default function App() {
  const inputTextRef = useRef(null);
  const [textContent, setTextContent] = useState("");

  let textInputFocusHandler = () => {
    inputTextRef.current.focus();
  };

  let textInputChangeHandler = ev => {
    //setTextContent(key);
    console.log(ev.nativeEvent);
    socket.type(ev.nativeEvent.key);
  };

  let onTouchEvent = ev => {
    socket.move(ev.nativeEvent.locationX, ev.nativeEvent.locationY);
  };

  let onPressEvent = ev => {
    socket.press();
  };

  let onReleaseEvent = ev => {
    socket.pressRelease();
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.touchSection}
        onStartShouldSetResponder={ev => true}
        onResponderMove={onTouchEvent}
        onResponderGrant={onPressEvent}
        onResponderRelease={onReleaseEvent}
      />

      <TextInput
        ref={inputTextRef}
        onKeyPress={textInputChangeHandler}
        value={textContent}
      />

      <Button title="Che este s un boton" onPress={textInputFocusHandler} />

      <View
        style={{
          borderColor: "red",
          borderWidth: 1,
          padding: 16,
          marginTop: 20
        }}
      >
        <Text>Show Typing Values:</Text>
        <Text>
          {textContent}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  touchSection: {
    width: "100%",
    height: "50%",
    borderColor: "green",
    borderWidth: 1,
    padding: 16,
    marginTop: 20
  }
});
