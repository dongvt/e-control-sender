import React, { useState } from "react";
import { useRef } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/core";

const SettingScreen = () => {
  const navigation = useNavigation();
  const [ipInputState, setIpInputState] = useState();
  const [portInputState, setPortInputState] = useState();

  const buttonPressHandler = () => {
    navigation.navigate("Control", {
      ip: ipInputState,
      port: portInputState
    });
  };
  const ipChangeHandler = ev => {
    setIpInputState(ev.nativeEvent.text);
  };
  const portChangeHandler = ev => {
    setPortInputState(ev.nativeEvent.text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputs}>
        <TextInput
          style={styles.ipInput}
          placeholder="IP Address"
          placeholderTextColor="#666"
          onChange={ipChangeHandler}
          value={ipInputState}
        />
        <TextInput
          style={styles.portInput}
          placeholder="Port, Ex 3000"
          placeholderTextColor="#666"
          onChange={portChangeHandler}
          value={portInputState}
        />
      </View>

      <Button
        style={styles.button}
        title="Connect"
        onPress={buttonPressHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    flexDirection: "row"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  ipInput: {
    backgroundColor: "#222",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#444",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: "#999",
    fontSize: 13,
    fontWeight: "400",
    margin: 0,
    padding: 10,
    width: 200
  },
  portInput: {
    backgroundColor: "#222",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#444",
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    color: "#999",
    fontSize: 13,
    fontWeight: "400",
    margin: 0,
    padding: 10,
    width: 100
  },
  button: {
    margin: 20,
    width: 300
  }
});

export default SettingScreen;
