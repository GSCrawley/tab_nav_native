import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function HomeScreen() {
    return (
      <View style={ styles.container}>
        <Text style={styles.home}>Home!</Text>

      </View>
    );
  }

const styles = StyleSheet.create( {
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  home: {
    fontSize: 48,
    fontWeight: 'bold'
  }
  })
