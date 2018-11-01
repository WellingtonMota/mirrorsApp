import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Camera from './src/components/Camera';
import Colors from './src/data/Colors';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bgColor: Colors[0],
      click: 0
    };
  }

  changeColor() {
    const pos = this.state.click < 50 ? this.state.click + 1 : 0;

    this.setState({
      bgColor: Colors[pos],
      click: pos
    });
  }

  render() {
    return (
      <View 
        style={{
          backgroundColor: this.state.bgColor, 
          flex: 1,
          flexDirection: 'column' }}
      >
        <Camera />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.changeColor.bind(this)} style={styles.capture}>
            <Text style={styles.buttonText}> Trocar moldura </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#ededed',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  },
  buttonText: {
    color: '#333333',
    fontSize: 14
  }
});
