import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Settings</Text>
        <Text style={styles.content}> Content! </Text>
      </View>
    );
  }

const styles = StyleSheet.create( { 
    container: {
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center',
      backgroundColor: 'lightgreen'
    },
    heading: {
      fontSize: 48,
      fontWeight: 'bold',
      margin: 20
    },
    content: {
      fontSize: 28,
      fontWeight: 'bold',
      color: 'violet'
    }
    })  