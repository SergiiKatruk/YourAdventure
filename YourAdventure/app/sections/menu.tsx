import React from "react"
import { StyleSheet, View, TouchableOpacity, Alert, Text } from "react-native"
import { useNavigation } from "@react-navigation/native"
import MenuContants from '../constants/menu'

export const Menu = (props: any) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate(MenuContants.Adventures)}>
          <Text style={styles.buttonText}>Trips</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate(MenuContants.Registration)}>Register</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => navigation.navigate(MenuContants.Contact)}>
          <Text style={styles.buttonText}>Contact us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#35605a",
  },
  buttonRow: {
    flex: 1,
    flexDirection: "row",
    alignContent: 'stretch',
    alignItems: "stretch",
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: 'center',
    borderColor: "#ffffff",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
  },
  buttonText: {
    borderColor: "#ffffff",
    fontSize: 18,
  },
});
