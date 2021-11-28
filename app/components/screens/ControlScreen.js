import React, { useRef } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";
import { useNavigation } from "@react-navigation/core";

import Socket from "../../socket/socket.js";

//Timer for double click
let lastPress = 0;
const DOUBLE_PRESS_DELAY = 400;

const ControlScreen = props => {
  console.log(props.route.params);
  let socket = new Socket();
  const inputTextRef = useRef();
  const navigation = useNavigation();

  let textInputFocusHandler = () => {
    inputTextRef.current.focus();
  };

  let textInputChangeHandler = ev => {
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
        //onResponderGrant={onPressEvent}
        onResponderRelease={onReleaseEvent}
      />

      <TextInput
        ref={inputTextRef}
        autoCapitalize={"none"}
        onKeyPress={textInputChangeHandler}
      />

      <Button title="Che este s un boton" onPress={textInputFocusHandler} />
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
    width: "100%",
    height: "50%",
    borderColor: "green",
    borderWidth: 1,
    padding: 16,
    marginTop: 20
  }
});

export default ControlScreen;
