import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 'react-native-ionicons';

export default function SettingsScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Settings</Text>
        <Text style={styles.content}> Content! </Text>
  
        <Text style={styles.instructions}>
          <Icon name="camera" size={40} color="red" />
        </Text>
        <Icon
          name="tv"
          size={40}
          color="blue"
        />
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
    },
    textStyle: {
      textAlign: 'center',
      marginTop: 20,
    },
    instructions: {
      textAlign: 'center',
      margin: 10,
    }
    })  