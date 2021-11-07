import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={require("./assets/gift.jpg")} style={styles.img} />
      </View>
      <View style={styles.input}>
        <TextInput
          placeholder="enter full name here...."
          style={styles.placeholder}
        />
        <TextInput
          placeholder="enter a valid email...."
          style={styles.placeholder}
        />
        <TextInput
          placeholder="enter your address...."
          style={styles.placeholder}
        />
      </View>
      <View style={styles.btn}>
        <TouchableOpacity>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EDE7F6",
  },
  profile: {
    flex: 0.5,
    maxWidth: 100,
  },
  input: {
    flex: 1,
    marginTop: 100,
    width: 100,
    alignItems: "center",
  },
  btn: {
    flex: 0.2,
  },
  img: {
    width: 150,
    height: 150,
    marginTop: 50,
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  placeholder: {
    width: 400,
    height: 60,
    borderRadius: 8,
    color: "#212121",
    alignItems: "center",
    backgroundColor: "#BDBDBD",
    fontSize: 20,
    marginBottom: 20,
    paddingStart: 30,
  },
});

export default App;
