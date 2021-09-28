import React, { Component } from "react";
import {
  Alert,
  BackHandler,
  Image,
  PermissionsAndroid,
  RefreshControl,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "Aceng is Here..!",
      value: true,
      username: null,
      refresh: false,
    };
  }

  backAction = () => {
    Alert.alert("Perhatian", "pesan ....", [
      {
        text: "cancel",
        onPress: () => null,
        style: "cancel",
      },
      {
        text: "ok",
        onPress: () => BackHandler.exitApp(),
      },
    ]);
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl
            refreshing={this.state.refresh}
            onRefresh={() => {
              console.log("Refreshing");
              this.setState({ refresh: false });
            }}
          />
        }
      >
        <StatusBar barStyle="light-content" backgroundColor="#ffaabb" />
        <View style={styles.container}>
          <Text style={{ color: "#ffffff" }}>{this.state.header}</Text>
        </View>

        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => this.requestCameraPermission()}
        >
          <Image
            source={{
              uri: "https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2021/07/13/gambar-ilustrasi-bisa-memperjela-20210713123218.jpg",
            }}
            style={{
              width: 300,
              height: 300,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View style={styles.switch}>
          <Switch
            value={this.state.value}
            onValueChange={() => this.setState({ value: !this.state.value })}
          />
        </View>

        <TextInput
          value={this.state.username}
          style={styles.textInput}
          onChangeText={(val) => this.setState({ username: val })}
        />
        <Text>{this.state.username}</Text>

        <TouchableOpacity style={styles.btnTouchAble}>
          <Text style={styles.button}>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnTouchAble}>
          <Text style={styles.button}>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnTouchAble}>
          <Text style={styles.button}>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnTouchAble}>
          <Text style={styles.button}>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnTouchAble}>
          <Text style={styles.button}>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnTouchAble}>
          <Text style={styles.button}>Click Me</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 20,
    paddingHorizontal: 5,
    marginTop: 10,
    borderColor: "crimson",
    // backgroundColor: 'crimson',
    color: "#ffffff",
  },
  btnTouchAble: {
    backgroundColor: "crimson",
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 30,
    elevation: 10,
  },
  switch: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
  },
  container: {
    backgroundColor: "crimson",
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 10,
  },
});

export default Home;
