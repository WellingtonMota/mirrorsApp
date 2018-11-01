import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default class CFlatList extends Component {
  render() {
    return (
      <View style={styles.container__camera} >
        <RNCamera
          ref={camera => { this.camera = camera; }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container__camera: {
    flex: 1,
    flexDirection: 'column',
    padding: 10
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
