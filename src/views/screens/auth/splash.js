import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  Image,
} from "react-native";
import { StackActions } from "@react-navigation/native";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.dispatch(StackActions.replace("login"));
    }, 5000);
  }

  ws = Dimensions.get("screen").width;
  hs = Dimensions.get("screen").height;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          style={{
            width: this.ws,
            height: this.hs,
          }}
          resizeMode="cover"
          source={{
            uri: "https://www.brown.edu/academics/public-health/sites/academics-public-health/files/people-from-above-845.jpg",
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#424242",
              opacity: 0.7,
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Image
              style={{
                height: 300,
                width: 300,
              }}
              source={require("./../../../../assets/logo/1.png")}
            />
            <View>
              <ActivityIndicator size="large" color="#ffffff" />
              <Text
                style={{ color: "#ffffff", fontSize: 18, fontWeight: "bold" }}
              >
                Menunggu...
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
