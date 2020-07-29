import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Tracker from './src/headlessJS/tracker';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Tracker.startService(30000)}>
          <Text style={styles.text}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => Tracker.stopService()}>
          <Text style={styles.text}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  view: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default App;
