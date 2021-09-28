import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import CheckBox from "@react-native-community/checkbox";

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={this.styles.container}>
        <View>
          <Text style={this.styles.firstTitle}>Sign In to</Text>
          <Text style={this.styles.secondTitle}>Me Apps</Text>

          <TextInput
            style={this.styles.inputText}
            placeholder="Username or Email"
            placeholderTextColor="#ffffff"
          />
          <TextInput
            style={this.styles.inputText}
            placeholder="Password"
            placeholderTextColor="#ffffff"
            secureTextEntry={true}
          />
          <CheckBox style={{ borderColor: "#ffffff" }} />
          <Text style={{ color: "#ffffff" }}>Do you like React Native?</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  ws = Dimensions.get("screen").width;
  hs = Dimensions.get("screen").height;

  styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-evenly",
      //   alignItems: "baseline",
      paddingHorizontal: 10,
      backgroundColor: "#000000",
      width: this.ws,
      height: this.hs,
    },
    inputText: {
      borderWidth: 1,
      borderRadius: 10,
      borderColor: "#ffffff",
      height: 50,
      paddingHorizontal: 10,
      marginTop: 20,
      color: "#ffffff",
    },
    firstTitle: {
      fontSize: 35,
      fontWeight: "bold",
      color: "#ffffff",
    },
    secondTitle: {
      fontSize: 33,
      fontWeight: "bold",
      color: "crimson",
    },
  });
}

export default LoginScreen;
