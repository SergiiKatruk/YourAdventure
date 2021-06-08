import React from "react"
import { StyleSheet, View, TouchableOpacity, Alert, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import MenuContants from '../constants/menu'

export const Menu = (props: any) => {
  const navigation = useNavigation()
  const buttonPressedPress = () => Alert.alert("ButtonPressed");
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate(MenuContants.Adventures)}
        >
          <Text style={styles.buttonText}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={buttonPressedPress}
        >
          <Text style={styles.buttonText} onPress={() => navigation.navigate(MenuContants.Registration)}>REGISTER</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate(MenuContants.Contact)}
        >
          <Text style={styles.buttonText}>CONTACT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={buttonPressedPress}
        >
          <Text style={styles.buttonText}>ABOUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#35605a",
  },
  buttonRow: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#ffffff",
    borderBottomWidth: 1,
  },
  buttonStyle: {
    backgroundColor: "#35605a",
    width: "50%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    borderColor: "#ffffff",
    fontSize: 18,
  },
});
