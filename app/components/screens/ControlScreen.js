import React, { useRef, useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Socket from "../../socket/socket.js";

//Timer for double click
let lastPress = 0;
const DOUBLE_PRESS_DELAY = 400;

const ControlScreen = props => {
  const address = `http://${props.route.params.ip}:${props.route.params.port}`;
  const [textValue, setTextValue] = useState("");

  let socket = new Socket(address);
  const inputTextRef = useRef();
  const navigation = useNavigation();

  let textInputFocusHandler = () => {
    inputTextRef.current.focus();
  };

  let textInputChangeHandler = ev => {
    //console.log(ev.nativeEvent);
    socket.type(ev.nativeEvent.key);
  };

  let onTouchEvent = ev => {
    socket.move(ev.nativeEvent.locationX, ev.nativeEvent.locationY);
  };

  let onPressEvent = ev => {
    socket.press();
  };

  let onReleaseEvent = () => {
    socket.pressRelease();
  };

  let scrollHandler = (direction) => {
    socket.scroll(direction);
  }

  const onDoublePress = () => {
    const time = new Date().getTime();
    const delta = time - lastPress;

    if (delta < DOUBLE_PRESS_DELAY) {
      onPressEvent();
    }
    lastPress = time;
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.touchSection}
        onStartShouldSetResponder={ev => {
          onDoublePress();
          return true;
        }}
        onResponderMove={onTouchEvent}
        onResponderRelease={onReleaseEvent}
      >
        <Text>Touch here to move mouse pointer</Text> 
      </View>

      <TextInput
        style={styles.textInput}
        ref={inputTextRef}
        autoCapitalize={"none"}
        onKeyPress={textInputChangeHandler}
      />
      <View style={styles.buttons}>
        <Button title="Scroll Up" onPress={scrollHandler.bind(this,"up")} />
        <Button title="Show Keyboard" onPress={textInputFocusHandler} />
        <Button title="Scroll Down" onPress={scrollHandler.bind(this,"down")} />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  touchSection: {
    flex: 1,
    width: "100%",
    height: "50%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 16,
    marginTop: 20,
    alignItems: 'center',
  },
  buttons: {
    flexDirection:'row'
  },
  textInput: {
    display: 'none'
  }
});

export default ControlScreen;
