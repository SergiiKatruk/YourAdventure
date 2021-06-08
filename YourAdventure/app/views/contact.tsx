import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
} from "react-native";
import { Header } from "../sections/header";
import { useNavigation } from "@react-navigation/native";

export const Contact = (args: { props: any }) => {
  const [msg, setMsg] = useState("Enter message");
  const [name, setName] = useState("Enter name");
  const [email, setEmail] = useState("Enter email");
  const navigation = useNavigation();
  const clearFields = () => {
    setMsg("");
    setName("");
    setEmail("");
  };
  const sendMessage = () => {
    Alert.alert(`Name: ${name}, email: ${email}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header message="Press to login" />
      <Text style={styles.heading}>Contact us</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        style={styles.multiInput}
        onChangeText={(text) => setMsg(text)}
        value={msg}
        multiline={true}
        numberOfLines={4}
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TouchableHighlight onPress={sendMessage} underlayColor="#31e981">
        <Text style={styles.button}>Send message</Text>
      </TouchableHighlight>
      <TouchableHighlight onPress={clearFields} underlayColor="#31e981">
        <Text style={styles.button}>Reset form</Text>
      </TouchableHighlight>
      <View></View>
    </View>
  );
};

Contact["navigationOptions"] = () => ({
  header: null,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: "45%",
  },
  heading: {
    fontSize: 16,
    flex: 1,
  },
  input: {
    flex: 1,
    width: "80%",
    padding: 10,
  },
  multiInput: {
    flex: 2,
    width: "90%",
    paddingTop: 20,
  },
  button: {
    marginTop: 15,
    fontSize: 16,
  },
});
