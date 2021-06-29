import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.settings}>Settings!</Text>
      </View>
    );
  }

const styles = StyleSheet.create( {
    container: {
      flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    settings: {
      fontSize: 48,
      fontWeight: 'bold'
    }
    })  