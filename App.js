import React, { Component } from 'react';
import { Image, StatusBar, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      header: 'Aceng is Here..!',
      value: true,
      username: null
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#ffaabb" />
        <View
          style={{
            backgroundColor: 'crimson',
            paddingVertical: 30,
            justifyContent: 'center',
            alignItems: 'center',
            elevation: 10
          }}
        >
          <Text style={{ color: '#ffffff' }}>{this.state.header}</Text>
        </View>

        <TouchableOpacity
          style={{ justifyContent: 'center', alignItems: 'center' }}
          onPress={() => {
            console.log('aceng');
          }}
        >
          <Image
            source={{
              uri: 'https://asset-a.grid.id//crop/0x0:0x0/700x465/photo/2021/07/13/gambar-ilustrasi-bisa-memperjela-20210713123218.jpg'
            }}
            style={{
              width: 300,
              height: 300
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10
          }}
        >
          <Switch
            value={this.state.value}
            onValueChange={() => this.setState({ value: !this.state.value })}

          />
        </View>

        <TextInput
          value={this.state.username}
          style={{
            borderWidth: 1,
            borderRadius: 20,
            marginHorizontal: 20,
            paddingHorizontal: 5,
            marginTop: 10,
            backgroundColor: 'crimson',
            color: '#ffffff'
          }}
          onChange={(value) => this.setState({ username: value })}
        />

        <TouchableOpacity
          style={{
            backgroundColor: 'crimson',
            paddingVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            marginHorizontal: 20,
            borderRadius: 30,
            elevation: 10
          }}
        >
          <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Click Me</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;